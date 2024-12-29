interface types {
  id: number,
  name: string,
  type: string,
  available: string,
}

const fetchData = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const dataf = await res.json();

  return dataf;

};

const PayoutPage = async () => {
  const data = await fetchData();
  console.log(data);

  // if(){}
  return (
    <div className="p-4 bg-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((product: types) => (
          <div key={product.id} className="border-4 border-black rounded-lg shadow-lg p-4 bg-[#f5b94b]">
              <h1 className="text-black mb-2 text-2xl font-bold">{product.name}</h1>
              <h1 className="text-green-800 mb-2 text-2xl font-semibold">{product.type}</h1>
          <p className="text-orange-900 font-medium">Available: {`${product.available}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutPage;
