import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="md:w-2/3 sm:pr-6">
      <div className="rounded-lg p-2 bg-slate-50 border">
        <div className="flex flex-col gap-2">
          <div className="border-b-4 border-dotted py-1">
            <h1 className="text-lg font-semibold">Personal Details</h1>
          </div>
          <p className=" text-sm">
            Email:{' '}
            <span className="text-gray-600">shaniyasmalcolm@gmail.com</span>
          </p>
          <p className=" text-sm">
            Language: <span className="text-gray-600">English</span>
          </p>
          <p className=" text-sm">
            Nationality: <span className="text-gray-600">American</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
