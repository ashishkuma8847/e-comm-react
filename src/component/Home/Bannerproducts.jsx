import  { useEffect, useState } from 'react'

const Bannerproducts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/getallhomedata`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  console.log(users)
const Baseimgurl= import.meta.env.VITE_BASE_URL_IMG

  return (
    <>
      <div className="container    hidden xl:block            relative mb-[334.88px]">
        <div className="flex absolute -top-[90px] rounded bg-lightwhite">
          {
            users.map((item, index) => (
              <div key={index + item + Date.now()} className="relative rounded-[5px] ">
                <h1 className='absolute text-natural-blue font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] top-[29px] left-[52px] max-w-[202px] w-full'>{item.name}</h1>
                <div className="">
                  {
                    index == 1 ? (<>
                    <img className='w-[400px]' src={`${Baseimgurl}/${item.images}`} alt="product" />
                    </>):<img src={`${Baseimgurl}/${item.images}`} alt="product" />
                  }
                  
                </div>
                <div className="absolute flex bottom-14 left-[52px] gap-2 items-center">
                  <h4 className='font-poppins font-normal text-lg leading-[150%] tracking-[0.5px] line-through text-natural-gray'>{item.price}</h4>
                  <h4 className='font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] text-primary-red'>{item.discountPercent}</h4>
                </div>
                <h2 className='absolute flex font-Raleway font-bold text-3xl leading-[180%] tracking-[0.5px] text-primary-blue bottom-4 right-[52px]'>{item.originalPrice}</h2>
              </div>
            ))
          }


        </div>
      </div>
    </>
  )
}

export default Bannerproducts