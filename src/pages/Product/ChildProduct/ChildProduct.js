import React, {useEffect, useState} from 'react';
// import './DetailProduct.css';
import { Table, Space } from 'antd';
// import {useSearchParams,useNavigate, Link} from "react-router-dom";
import ProductServices from "../../../API/ProductServices";
// import { DownOutlined, RightOutlined } from '@ant-design/icons';
const ChildProduct = ({searchParams,data, setDel}) => {
    
  const removeProduct = async (e, id) => {
    e.preventDefault();
        // console.log(id);
        const response = await ProductServices.removeProduct(id);
        if(response.status === 204) {
          setDel((prev) => !prev)
          
        }
        // product = product.filter(item => item.id !== id)
        // console.log(response);
      };
    
    
    const columns = [
        { title: 'Part name', dataIndex: 'name', key: 'name' },
        // { title: 'Part barcode', dataIndex: 'barcode', key: 'barcode' },
        { title: 'Part serial number', dataIndex: 'serialNumber', key: 'serialNumber' },
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
                    // setDetaliId(id)
                  }}
                >
                  Show All
                </a> */}
                {/* <Link
                  onClick={() => {
                    navigate({
                      pathname: '/dashboard/allProduct/edit',
                      search: `?id=${id}`,
                    });
                  }}
                >
                  edit
                </Link> */}
                <a 
                onClick={evt => removeProduct(evt, id)}
                >
                  <img src='/images/TrashSimple.png' className='icon__trash' alt='' />
                </a>
              </Space>
            ),
          },
    ];

    return (
        <div className="wrapper wrapper-detail">
            
            <h3>Subsystem</h3>

            <Table className="table_children" columns={columns} dataSource={data} scroll={{ x: 1300 }} pagination={false} />
        </div>
    );
};

export default ChildProduct;
