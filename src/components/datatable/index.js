import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Col, Dropdown, Menu, Popconfirm, Row, Table } from 'antd'


class DataTable extends Component{
    constructor(props) {
        super(props)
        const {
          sortBy,
          sortDirection,
          columns,
          rowKey,
        } = props
        this.state = {
          fetchData: {
            offset: 0,
            limit: 10,
            sortBy: sortBy || rowKey,
            sortDirection: sortDirection || 'ASC',
          },
          selectedRowKeys: [],
          pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ['10', '20', '30', '50', '100'],
            showTotal: total => `共 ${total} 条`,
            defaultPageSize: 10,
            defaultCurrent: 0,
            total: this.props.total,
          },
          columns,
          colsSwitchVisible: false,
        }
      }
    
    render(){
        return(
            <div></div>
        )
    }
}
export {DataTable}