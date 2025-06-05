const CheckboxComponent = () => {
  return (
    <div className="flex items-center ml-7">
      <label className="mr-10">性別</label>
      <input
        id="checkbox"
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label htmlFor="checkbox" className=" ml-2 text-gray-700 mr-20">
        女
      </label>
      <input
        id="checkbox"
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 ml-15"
      />
      <label htmlFor="checkbox" className="ml-2 text-gray-700">
        男
      </label>
    </div>
  );
};
export default CheckboxComponent;
