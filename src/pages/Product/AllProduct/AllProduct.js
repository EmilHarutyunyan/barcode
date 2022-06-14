import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './AllProduct.css';
import ProductServices from '../../../API/ProductServices';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProduct,
  selectProduct,
  getProductId,
} from '../../../redux/features/product/ProductSlice';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import DetailProduct from '../DetailProduct/DetailProduct';
import { getProductPage } from '../../../redux/features/product/ProductAPI';

const AllProduct = () => {
  const [pageInfo, setPageInfo] = useState({maxResPage:[1,2,3],limit:5});
  const [page,setPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(5)
  const [del,setDel] = useState(false)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = useSelector(selectProduct);

 
  useEffect(() => {
   
    dispatch(getProduct({ page: page || 1, limit: pageLimit }));
    // eslint-disable-next-line
  }, [page,pageLimit]);

  useEffect(()=> {
    if(del===true) {
      dispatch(getProduct({ page: page || 1, limit: pageLimit }));
      setDel(false)
    }
    // eslint-disable-next-line
  },[del])
  useEffect(() => {
    const fullData = async () => {
      const dataProduct = await getProductPage({ limit: 5 });
      setPageInfo({
        ...pageInfo,
        page: dataProduct.data.page,
        totalPages: Array.from(
          { length: dataProduct.data.totalPages },
          (_, i) => i + 1
        ),
        totalResults: dataProduct.data.totalResults,
      });
    };
    fullData();
  }, [pageInfo.totalResults]);

  const removeProduct = async (e, id) => {
    e.preventDefault();
    
    const response = await ProductServices.removeProduct(id);
    if(response.status === 204) {
      dispatch(getProduct({ page: page || 1, limit: pageLimit }));
    }
   
  };


  // const expandedRowRender = () => {
  //   const columns = [
  //     { title: 'Part name', dataIndex: 'name', key: 'name' },
  //     // { title: 'Part barcode', dataIndex: 'barcode', key: 'barcode' },
  //     {
  //       title: 'Part serial number',
  //       dataIndex: 'serialNumber',
  //       key: 'serialNumber',
  //     },
  //     { title: 'Part count', dataIndex: 'partCount', key: 'partCount' },
  //     { title: 'Part price', dataIndex: 'price', key: 'price' },
  //     { title: 'Usage', dataIndex: 'usage', key: 'usage' },
  //     { title: 'Time stamp', dataIndex: 'timeStamp', key: 'timeStamp' },
  //     { title: 'Employee name or ID ', dataIndex: 'employee', key: 'employee' },
  //     {
  //       title: 'Action',
  //       dataIndex: 'id',
  //       key: 'operation',
  //       render: id => (
  //         <Space size='middle'>
  //           <a
  //             onClick={() => {
  //               // navigate({
  //               //   pathname: '/dashboard/detail',
  //               //   search: `?id=${id}`,
  //               // });

  //               setDetaliId(id)
  //             }}
  //           >
  //             Show All
  //           </a>
  //           <a
  //             onClick={evt => {
  //               evt.preventDefault();
  //               navigate({
  //                 pathname: '/dashboard/edit',
  //                 search: `?id=${id}`,
  //               });
  //             }}
  //           >
  //             edit
  //           </a>
  //           <a onClick={evt => removeProduct(evt, id)}>
  //             <img
  //               src='/images/TrashSimple.png'
  //               className='icon__trash'
  //               alt=''
  //             />
  //           </a>
  //         </Space>
  //       ),
  //     },
  //   ];

  //   const data = [];
  //   for (let i = 0; i < product?.length; ++i) {
  //     for (let d = 0; d < product[i].childs.length; d++) {
  //       console.log('00000', product[i].childs);
  //       data.push({
  //         key: d,
  //         name: `${product[i].childs[d].name}`,
  //         barcode: '123456789',
  //         serialNumber: 'A7478',
  //         partCount: 532,
  //         price: '$ 441',
  //         usage: 'New',
  //         timeStamp: '12.02.2021 14:33',
  //         id: 'JC789632',
  //       });
  //     }
  //     // for (let j = 0; j < product?.childs?.length; j++) {
  //     //
  //     //     // data.push({
  //     //     //     key: j,
  //     //     //     name: `Product 1/${j + 1}`,
  //     //     //     barcode: '123456789',
  //     //     //     serialNumber: 'A7478',
  //     //     //     partCount: 532,
  //     //     //     price: '$ 441',
  //     //     //     usage: 'New',
  //     //     //     timeStamp: '12.02.2021 14:33',
  //     //     //     id: 'JC789632',
  //     //     // });
  //     // }
  //   }
  //   return (
  //     <Table
  //       className='sub__table'
  //       showHeader={true}
  //       columns={columns}
  //       dataSource={data}
  //       pagination={false}
  //       // onRow={(record, rowIndex) => {
  //       //     return {
  //       //         onClick: event => {
  //       //             console.log(record);
  //       //         }
  //       //     }
  //       // }}
  //     />
  //   );
  // };

  const columns = [
    { title: 'Part name', dataIndex: 'name', key: 'name' },
    // { title: 'Part barcode', dataIndex: 'barcode', key: 'barcode' },
    {
      title: 'Part serial number',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    { title: 'Part count', dataIndex: 'partCount', key: 'partCount' },
    { title: 'Part price', dataIndex: 'price', key: 'price' },
    { title: 'Usage', dataIndex: 'usage', key: 'usage' },
    { title: 'Time stamp', dataIndex: 'timeStamp', key: 'timeStamp' },
    { title: 'Employee name or ID ', dataIndex: 'employee', key: 'employee' },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'operation',
      render: id => (
        <Space size='middle'>
          {/* <a
            onClick={() => {
              // navigate({
              //   pathname: '/dashboard/allProduct/detail',
              //   search: `?id=${id}`,
              // });
              setDetaliId(id)
            }}
          >
            Show All
          </a> */}
          <a
            onClick={() => {
              navigate({
                pathname: '/dashboard/allProduct/edit',
                search: `?id=${id}`,
              });
            }}
          >
            edit
          </a>
          <a onClick={evt => removeProduct(evt, id)}>
            <img src='/images/TrashSimple.png' className='icon__trash' alt='' />
          </a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < product.length; ++i) {
    
    data.push({
      key: i,
      name: product[i].name,
      // barcode: '123456789',
      serialNumber: product[i].serialNumber,
      partCount: product[i].partCount,
      price: `$ ${product[i].partPrice}`,
      usage: product[i].usage,
      timeStamp: product[i].time,
      employee: product[i].employeeName,
      id: product[i].id,
      children: product[i].childs,
    });
  }
  // console.log(data);
  const [search, setSearch] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getProductId(search));
  };


  return (
    <>
      <div className='section__all__product'>
        <form autoComplete='off' onSubmit={handleSubmit} className='all-search'>
          <div className='form-group'>
            <input
              className='form-field'
              type='number'
              placeholder='Part serial number'
              value={search}
              onChange={e => {
                if (e.target.value === '') {
                  dispatch(getProduct({ page: 1, limit: 5 }));
                }
                setSearch(e.target.value);
              }}
            />
            <input type='submit' value='Search' className='search-btn' />
          </div>
        </form>

        <Table
          className='components-table-demo-nested'
          columns={columns}
          // expandable={{ expandedRowRender }}
          expandable={{
            rowExpandable: record => {
              if (!record.children || record.children.length === 0) return null;
              return !!record.children;
            },
            expandIcon: ({ expanded, onExpand, record }) => {
              if (!record.children || record.children.length === 0) return null;
              return expanded ? (
                <DownOutlined
                  onClick={e=> {
                    
                    onExpand(record, e);
                    
                  }
                  }
                />
              ) : (
                <RightOutlined
                  onClick={e => {
                    
                    onExpand(record, e);
                  }}
                />
              );
            },
            expandedRowRender: (record, index, indent, expanded) => {
              if (!record.children || record.children.length === 0) return null;
              return (
                <>
                  {
                    <DetailProduct
                      searchParams={record.id}
                      parentName={record.name}
                      setDel={setDel}
                    />
                  }
                  <hr />
                </>
                
              );
            },
          }}
          dataSource={data}
          pagination={{
            current:page,
            pageSize:pageLimit,
            total: pageInfo?.totalResults,
            onChange:(page,pageLimit) => {
                setPage(page);
                setPageLimit(pageLimit);
            }

          }}
        />
      </div>
    </>
  );
};

export default AllProduct;
