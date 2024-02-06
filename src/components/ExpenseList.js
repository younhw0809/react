import React from 'react'
import ExpenseItem  from './ExpenseItem'
import './ExpenseList.css'
import { FaRegWindowClose } from "react-icons/fa";

const ExpenseList = ({expenses,clearExpense, clearItems,editExpense}) => {
    return (
      <React.Fragment>
        <ul className='list'>
            {expenses.map(expense => {
              return(
                <ExpenseItem expense={expense} key={expense.id}
                            clearExpense = {clearExpense}
                            editExpense = {editExpense}
                />
              )
            })}
        </ul>
        {expenses.length > 0 &&(
          <button className='btn' 
                  onClick={clearItems}>
              목록 지우기<FaRegWindowClose />
          </button>
        )}
      </React.Fragment>
    )
}

export default ExpenseList