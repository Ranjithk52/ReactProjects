import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function View() {
    const [boards, setboards] = useState([]);
    const boardsCollectionRef = collection(db, 'curddatabase')
    const getBoards = async () => {
        const data = await getDocs(boardsCollectionRef);
        setboards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };
    const navigate = useNavigate();
    useEffect(() => {
        getBoards();
    }, []);
    const deleteBoard = async (id) => {
        const boardDoc = doc(db, "curddatabase", id);
        await deleteDoc(boardDoc);
        getBoards();
        navigate("/view");
    }
    const updatee=(empname)=>{
       
        
        navigate(`/update/${empname}`);
    }
    
    return (
        <div>
            <div className="card">
                <div>
                    <div className="card-header">
                        <h1 style={{ folat: "center" }}>Board List</h1>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Email</th>
                                <th scope="col">Employee Salary</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boards.map((board) => {
                                return (
                                    <tr key={board.ename}>
                                        <td>{board.ename}</td>
                                        <td>{board.eid}</td>
                                        <td>{board.eemail}</td>
                                        <td>{board.esal}</td>
                                        <td>
                                            <a className="btn btn-primary" style={{ margin: "10px" }}>
                                                View
                                            </a>
                                            <a
                                                className="btn btn-info"
                                                style={{ margin: "10px" }}
                                                onClick={() => updatee(board.ename)}
                                            >
                                                Edit
                                            </a>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteBoard(board.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View
