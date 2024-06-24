import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; // Import modal styles

const SearchModal = ({ isOpen, onClose }:any) => {
  return (
    <Modal open={isOpen} onClose={onClose} center={false} // Do not center the modal
    blockScroll={false}
    styles={{
      modal: {
        marginTop: '5rem', 
        borderRadius: '0', 
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', 
        maxWidth: '90%',
        width: '90%', 
      },
    }} >
      <div className="bg-white p-6 rounded shadow-md mt-[-10px]">
        <h2 className="text-xl font-bold mb-4">Search Products</h2>
        <form className="space-y-4">
          <div className="flex items-center border border-gray-200 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 flex-1 outline-none w-[90%] "
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Search
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SearchModal;
