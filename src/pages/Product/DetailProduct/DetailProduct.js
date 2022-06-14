import React, {useEffect, useState} from 'react';
import './DetailProduct.css';
import { Table, Space } from 'antd';
import {useSearchParams,useNavigate, Link} from "react-router-dom";
import ProductServices from "../../../API/ProductServices";
import Spinner from '../../../components/Spinner/Spinner';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import ChildProduct from '../ChildProduct/ChildProduct';
const DetailProduct = ({searchParams,setDel}) => {
    const [loading,setLoading] = useState(true)
    
    const navigate = useNavigate()
    const id = searchParams
    const [product, setProduct] = useState(null);
    const data = [];
    // let date = new Date(product?.time).toLocaleDateString();
  //  console.log(setDel,"setDel");
    const removeProduct = async (e, id) => {
      e.preventDefault();
      
      const response = await ProductServices.removeProduct(id);
      
      if(response.status === 204) {
        setDel((prev)=> !prev)
      }
     
      
    };
    
    useEffect(async () => {
        const response = await ProductServices.getById(id);
        setProduct(response.data)
        setLoading(false)
    }, [])


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
                {/* <a
                  onClick={() => {
                    navigate({
                      pathname: '/dashboard/allProduct/edit',
                      search: `?id=${id}`,
                    });
                  }}
                >
                  edit
                </a> */}
                <a
                 onClick={evt => removeProduct(evt, id)}
                 >
                  <img src='/images/TrashSimple.png' className='icon__trash' alt='' />
                </a>
              </Space>
            ),
          },
    ];
    
    let children = product?.childs;

    for (let i = 0; i < children?.length; ++i) {
        
        data.push({
            key: i,
            name: children[i]?.name,
            // barcode: '123456789',
            serialNumber: children[i]?.serialNumber,
            partCount: children[i]?.partCount,
            price: `$ ${children[i]?.partPrice}`,
            usage: children[i]?.usage,
            timeStamp: children[i]?.time,
            employee: children[i]?.employeeName,
            id: children[i]?.id,
            // children: children[i]?.childs,
        });
        
    }
    const dataChild = []
    const childrenChild = children?.length > 0 ? (children[0].childs.length > 0 ? children[0].childs : undefined) : undefined;
    if(childrenChild) {
    for (let i = 0; i < children?.length; ++i) {
      
      dataChild.push({
          key: i,
          name: childrenChild[i]?.name,
          // barcode: '123456789',
          serialNumber: childrenChild[i]?.serialNumber,
          partCount: childrenChild[i]?.partCount,
          price: `$ ${childrenChild[i]?.partPrice}`,
          usage: childrenChild[i]?.usage,
          timeStamp: childrenChild[i]?.time,
          employee: childrenChild[i]?.employeeName,
          id: childrenChild[i]?.id,
          // children: children[i]?.childs,
      });
      
  }
}

    if(loading) {
        return <Spinner/>
    }
    return (
        <div className="wrapper wrapper-detail">
            {/* <div className="content_detail"> */}
                {/* <p>Part Name: <strong>{product?.name}</strong></p> */}
                {/* <p>Part Barcode: <strong>11111</strong></p> */}
                {/* <p>Part Serial Number: <strong>{product?.serialNumber}</strong></p> */}
                {/* <p>Part Count: <strong>{product?.partCount}</strong></p> */}
                {/* <p>Part Price: <strong>{product?.partPrice}</strong></p> */}
                {/* <p>Usage: <strong>{product?.usage}</strong></p> */}
                {/* <p>Time stamp: <strong>{date}</strong></p> */}
                {/* <p>Employee Name or Id: <strong>{product?.employeeName}</strong></p> */}
            {/* </div> */}
            <h3> System</h3>
            {/* {childrenChild && <Table className="table_children rttt" columns={columns} dataSource={data} scroll={{ x: 1300 }} pagination={false} />} */}
            {/* <Table className="table_children rttt" columns={columns} dataSource={dataChild} scroll={{ x: 1300 }} pagination={false} /> */}
            <Table className="table_children" columns={columns} dataSource={data} scroll={{ x: 1300 }} pagination={false} 
            expandable={{
          rowExpandable: record => {
            
            return !!childrenChild;
          },
          expandIcon: ({ expanded, onExpand, record }) => {
            if (!childrenChild) return null;
            return expanded ? (
              <DownOutlined onClick={(e) => {
                // setDetaliId(null)
                onExpand(record, e);
                
              }} />
            ) : (
              <RightOutlined onClick={(e) => {
               
                onExpand(record, e);
              }} />
            );
          },
          expandedRowRender: (record, index, indent, expanded) => {
            
            return (
              <>
                {<ChildProduct searchParams={record.id} data={dataChild} setDel={setDel}/>}
                <hr />
              </>
            // <DetailProduct searchParams={detaliId}/>
            );
          },
           
        }}

        />
        </div>
    );
};

export default DetailProduct;
