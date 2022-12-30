import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Resize, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject, Edit} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../Data/dummy';
import { Header } from '../component';


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting
        >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]}/>
      </GridComponent>
    </div>
  )
}

export default Orders