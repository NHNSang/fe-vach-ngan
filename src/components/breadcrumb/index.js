import { Breadcrumb } from 'antd'
import React from 'react'

const BreadcrumbComnponent = ({title_1, title_2, title_3, title_4}) => {
  let breadcrumbItems = [
    {
      title: <a href="/">{title_1}</a>,
    },
  ];
// Thêm mục thứ 2 vào breadcrumbItems
if (title_2 || title_3) {
  breadcrumbItems.push({
    title: title_3 ? <a href="#">{title_2}</a> : <p >{title_2}</p>,
  });
}

// Thêm mục thứ 3 vào breadcrumbItems
if (title_3) {
  breadcrumbItems.push({
    title: <p href="#">{title_3}</p>,
  });
}
  return (
    <div className='bg-white py-3 mb-5 px-3'>
       <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

export default BreadcrumbComnponent
