import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchData } from "../actions/actions";

const ToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    // dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data &&
        data.map((item: any) => (
          <div key={item.id}>{item.name}</div> // Assuming 'name' is a property of your data
        ))}
    </div>
  );
};

export default ToDo;
