import {useState} from "react";
import "./TodoForm.css"

function TodoForm(props) {

    const [newTodo, setNewTodo] = useState('');

    function onEnterKeyPress(e) {
        if (e.charCode === 13) {
            addNewTodo();
        }
    }

    function addNewTodo() {
        if (newTodo !== "") {
            setNewTodo('');
        }
        props.addItem(newTodo);
        setNewTodo('');
    }



    return (
        <div>
            <input
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => onEnterKeyPress(e)}
                value={newTodo}
                maxLength={35}
                placeholder="Enter new todo"
                className="input"
            />
            <button onClick={addNewTodo} className="addbutton">
                Add Todo
            </button>
        </div>
    );
}

export default TodoForm;
