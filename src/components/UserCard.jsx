import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaHeart, FaEdit, FaTrash } from 'react-icons/fa';
import Modal from './Modal';

const UserCard = ({ user, onLike, onEdit, onRemove }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className='bg-gray-100'>
        <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt={user.username}
            className="w-[200px] h-[200px] mx-auto"
        />
      </div>
      <h3 className="text-5px font-medium mt-5 mb-2 ml-7">{user.name}</h3>
      <div className='flex flex-col gap-2 ml-7'>
        <div className="text-sm text-gray-600 text-center flex gap-2"><FaEnvelope size={18}/>{user.email}</div>
        <div className="text-sm text-gray-600 text-center flex gap-2"><FaPhoneAlt size={18}/>{user.phone}</div>
        <div className="text-sm text-gray-600 text-center flex gap-2"><FaGlobe size={18}/>{user.website}</div>
      </div>

      <div className="flex justify-around mt-4 items-center border border-t-1 bg-gray-50 py-2">
        <button
          className={'px-4 py-1 text-sm'}
          onClick={() => onLike(user.id)}
        >
          {/* {user.liked ? 'Unlike' : 'Like'} */}
          <FaHeart color={user.liked ? 'red' : 'gray'} size={18}/>
        </button>
        <button
          className="px-4 py-1"
          onClick={() => setModalOpen(true)}
        >
          <span className='hover:text-blue-400'><FaEdit size={20}/></span>
        </button>
        <button
          className="px-4 py-1 text-sm"
          onClick={() => onRemove(user.id)}
        >
          <span className='hover:text-blue-400'><FaTrash size={15}/></span>
        </button>
      </div>
      {isModalOpen && (
        <Modal
          user={user}
          onClose={() => setModalOpen(false)}
          onSave={updatedUser => {
            onEdit(user.id, updatedUser);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default UserCard;
