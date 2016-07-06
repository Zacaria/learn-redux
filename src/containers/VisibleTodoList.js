import {connect} from 'react-redux'
import { withRouter} from 'react-router'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter(t => t.completed)
        case 'active':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state.todos, params.filter || 'all')
    }
}

/* Replaced by the object  { onTodoClick: toggleTodo }*/
// const mapDispatchToProps = (dispatch) => ({
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id))
//     }
// });

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList
