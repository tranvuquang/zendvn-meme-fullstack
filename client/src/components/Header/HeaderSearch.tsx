import { useState } from "react";
import { useNavigate } from "react-router";

export default function HeaderSearch() {
  let navigate = useNavigate();
  const [queryStr, setQueryStr] = useState("");

  function onChange(e: any) {
    setQueryStr(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (queryStr) {
      navigate(`/search?q=${queryStr}`);
    }
  }

  return (
    <div className="ass1-header__search">
      <form action="#" onSubmit={handleSubmit}>
        <label>
          <input
            value={queryStr}
            onChange={onChange}
            type="search"
            className="form-control"
            placeholder="Nhập từ khóa ..."
          />
          <i className="icon-Search" />
        </label>
      </form>
    </div>
  );
}
