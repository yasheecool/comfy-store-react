import { useLoaderData } from 'react-router';
import { TitleWithBorder } from '../components';
import customFetch from '../lib/axios';
import endpoints from '../lib/endpoints';
import { useEffect } from 'react';

const orderQuery = {
  queryKey: ['orders'],
  queryFn: () => customFetch.get(endpoints.allOrders),
};

export const orderLoader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(orderQuery);
  return data.data;
};

const Orders = () => {
  const { data: orders, meta } = useLoaderData();

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  if (!orders.length || !orders) {
    return (
      <section className='section-container py-20'>
        <TitleWithBorder text={'No orders yet!'} />
      </section>
    );
  }

  return (
    <section className='section-container py-20'>
      <TitleWithBorder text={'Your Orders'} />

      <div className='flex py-4 flex-col gap-4'>
        <p>Total Orders: {orders.length}</p>
        <div className='overflow-x-auto rounded-lg shadow-md'>
          <table className='table table-zebra'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const {
                  address,
                  cartItems,
                  name,
                  numItemsInCart,
                  orderTotal,
                  createdAt,
                } = order.attributes;
                return (
                  <tr key={order.id}>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{numItemsInCart}</td>
                    <td>${orderTotal}</td>
                    <td>{new Date(createdAt).toLocaleDateString()}</td>
                  </tr>
                );
              })}

              <tr>
                <td>name</td>
                <td>address</td>
                <td>products</td>
                <td>cost</td>
                <td>Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Orders;
