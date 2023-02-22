import { useAuthStore } from '@/App/store/useAuthStore';
// import { useUsersStore } from '@/App/store/useProfileStore';
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import api from '@/Api/backend_sneakers';
import swal from 'sweetalert';





const CardsUsers = () => {
    
    const { users, profile,getUsers, deleteUser}= useAuthStore(state=> state)
              // console.log("token en Profiles",token)
    console.log('perfiles', users)
    console.log("profile",profile)


    const handleDelete = async (id: number) => {
        await api.delete(`/user/${id}`)
        try {
         deleteUser(id)
          swal({
            title: "Excellent",
            text: "User deleted successfuly!",
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "rounded-3xl bg-yellow-400 text-black text-center w-full px-5 py-2 my-8",
                closeModal: true,
              },
            },
          });
        } catch (error) {
          console.log(error);
        }
      };
        


    useEffect(()=>{
      getUsers()
    },[])


  return (
    <>
      <body className="antialiased font-sans bg-gray-200">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            </div>
           
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Contact Number
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    
                                </th>
                            </tr>
                        </thead>            
                      {users?.map((user)=> (
                           <tr>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <div className="flex items-center">
                                  
                                   <div className="ml-3">
                                       <p className="text-gray-900 whitespace-no-wrap">
                                           {user.firstName} {user.lastName}
                                       </p>
                                   </div>
                               </div>
                           </td>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <p className="text-gray-900 whitespace-no-wrap">{user.userName}</p>
                           </td>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <p className="text-gray-900 whitespace-no-wrap">
                                   {user.email}
                               </p>
                           </td>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <p className="text-gray-900 whitespace-no-wrap">
                                   {user.contactNumber}
                               </p>
                           </td>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {
                                user.rol=== 'banned'? (

                               <span
                                   className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                   <span aria-hidden
                                       className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                   <span className="relative">{user.rol}</span>
                               </span>
                                ):
                                <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">{user.rol === "user" ? (
                                   "active"
                                ):
                                (null)
                                }</span>
                            </span>
                            }
                           </td>

                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <button className="text-gray-900 whitespace-no-wrap" onClick={()=>handleDelete(user.id)}>
                                   <DeleteIcon className='text-red-500'/>
                               </button>
                           </td>
                       </tr>
                        ))}
                    </table>                 
                </div>
            </div>
        </div>
    </div>
</body>
      </>
  )
}

export default CardsUsers
