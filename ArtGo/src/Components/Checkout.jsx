import arrow from "../Images/downArrow.svg";

const Checkout = () => {
  return (
    <>
      <div>
        <div className="mb-8 bg-brown1 text-white  font-semibold">
          <div className=" flex flex-col gap-4 md:flex-row p-8 text-sm w-fit mx-auto lg:text-xl justify-around">
            <p>Checkout</p>
            <p>Back to Shop</p>
            <p>Payment</p>
            <p>Confirmation</p>
          </div>
        </div>

        <section className="px-5 flex justify-between pb-5 items-start">
          <div>
            <p className="font-bold">Shipping details</p>
            <p>Paul Atreides</p>
            <p>15 New World Estate</p>
            <p>Beverly Hills, California</p>
          </div>
          <p>paulatreides@gmail.com</p>
          <div className="hidden md:flex gap-3 border items-center  p-2">
            <p>Filters</p> <img width="18px" src={arrow} alt="" />
          </div>
        </section>
        <hr />

        <section className="pt-5 px-5">
          <div className="flex items-center justify-between">
            <p className="font-bold">Your Order (2 items)</p>
            <div className=" border   p-2">
              <p>Edit Order</p>
            </div>
          </div>

          <div>
            <div className=" ">
              <p className="font-bold text-lg"> 1. Silence</p>
              <p>Type: Digital art</p>
              <p>Category: People</p>
              <p>Dimensions: 172.7 W x 172.7 H x 0.3 D cm</p>
              <p>Year of Creation: 2016</p>

              <div className="flex items-center gap-2">
                <p>Quantity</p>
                <select className="w-[4rem] p-1 border" name="Quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-xs py-4 text-green-500">
                Guaranteed arrival on 14th July if you order today
              </p>
              <p className="text-xl font-semibold">$3000</p>
            </div>
          </div>
          <div>
            <div className="pt-10 ">
              <p className="font-bold text-lg"> 2. Ethereal</p>
              <p>Type: Digital art</p>
              <p>Category: People</p>
              <p>Dimensions: 172.7 W x 172.7 H x 0.3 D cm</p>
              <p>Year of Creation: 2016</p>

              <div className="flex items-center gap-2">
                <p>Quantity</p>
                <select className="w-[4rem] p-1 border" name="Quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-xs py-4 text-green-500">
                Guaranteed arrival on 14th July if you order today
              </p>
              <p className="text-xl font-semibold">$3000</p>
            </div>
          </div>
        </section>
        <hr className="mt-8" />
        {/* payment section  */}

        <section className=" w-full xs:w-1/4 px-5 py-10">
          <h2 className=" text-xl font-bold">Payment details</h2>
          <form action="">
            <div className="pt-4">
              <label htmlFor="Card name">Card name</label>
              <p className="border p-2">Paul Timothy</p>
            </div>
            <div className="pt-4 w-full">
              <label htmlFor="Card number">Card number</label>
              <p className="border p-2 ">1665 1887 2992 3682</p>
            </div>
            <div className="flex pt-4 items-center gap-5">
              <div className="">
                <label htmlFor="Valid through">Valid through</label>
                <p className="border p-2 ">12/29</p>
              </div>
              <div>
                <label htmlFor="CVC">CVC</label>
                <p className="border p-2 w-full">873</p>
              </div>
            </div>
            <p className="pt-6 text-sm text-green-500">
              Choose another payment method
            </p>
          </form>
        </section>
        <div className="pt-5 pb-10">
          <p className="text-center bg-black text-white w-fit p-2 mx-auto">
            Pay $6000
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
