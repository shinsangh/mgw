// import React, { Component, useState, useEffect }  from 'react';
// import Table from "react-bootstrap/Table";
// import { Amplify, API, graphqlOperation } from 'aws-amplify'
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { listTodos } from '../graphql/queries';
// import { CreateTodo as createNoteMutation, deleteTodo as deleteTodoMutation } from '../graphql/mutations';
// import awsExports from "../aws-exports";
// Amplify.configure(awsExports);

// const initialFormState = { name: '', description: '' }




// function BoardList() {

//     const [notes, setNotes] = useState([]);
//     const [formData, setFormData] = useState(initialFormState);
  
//     // useEffect(() => {
//     //   fetchNotes();
//     // }, []);
  
//     // async function fetchNotes() {
//     //   const apiData = await API.graphql({ query: listTodos });
//     //   setNotes(apiData.data.listTodos.items);
//     // }
  
//     async function createNote() {
//         const allTodos = await API.graphql(graphqlOperation(listTodos.getTest));
//         console.log(allTodos);
//     } 
  
  
//     async function deleteNote({ id }) {
//       const newNotesArray = notes.filter(note => note.id !== id);
//       setNotes(newNotesArray);
//       await API.graphql({ query: deleteTodoMutation, variables: { input: { id } }});
//     }

//         return (
//             <Table hover>
//                 <thead>
//                     <tr>
//                       123
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>게시글1</td>
//                         <td>artistJay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                     <tr>
//                         <td>게시글2</td>
//                         <td>artistJay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                     <tr>
//                         <td>게시글2</td>
//                         <td>artistJay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                 </tbody>
//                 <input
//                     onChange={e => setFormData({ ...formData, 'name': e.target.value})}
//                     placeholder="Note name"
//                     value={formData.name}
//                 />
//                 <input
//                     onChange={e => setFormData({ ...formData, 'description': e.target.value})}
//                     placeholder="Note description"
//                     value={formData.description}
//                 />
//                 {/* <button onClick={createNote}>Create Note</button> */}
//                 <div style={{marginBottom: 30}}>
//                     {
//                     notes.map(note => (
//                         <div key={note.id || note.name}>
//                         <h2>{note.name}</h2>
//                         <p>{note.description}</p>
//                         {/* <button onClick={() => deleteNote(note)}>Delete note</button> */}
//                         </div>
//                     ))
//                     }
//                 </div>
//             </Table>
            
//         )
    
// }

// export default BoardList;