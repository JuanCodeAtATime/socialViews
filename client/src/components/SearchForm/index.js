import React from "react";
import "./style.css";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>

            <div className="container align-items-center">
                <div className="row justify-content-center">
                    <div className="col-md align-items-center">
                        <div className="input-group" id="input-group">
                            <button type="button" className="hashBtn"
                                style={{
                                    backgroundColor: "red",
                                    color: "whitesmoke",
                                    width: "50px",
                                    borderRadius: "4px",
                                    marginRight: "3px"

                                }}><h3><b>#</b></h3></button>
                            <span> <input
                                type="text"
                                className="form-control"
                                // id="inlineFormInputGroup"
                                placeholder=" Enter a Destination!"
                                style={{
                                    backgroundColor: "whitesmoke",
                                    opacity: ".85",
                                    marginBottom: "0",
                                    paddingBottom: '0',
                                    paddingLeft: "4px",
                                    width: "385px",
                                    minWidth: "300px",
                                    borderRadius: "4px"

                                }}
                            >
                            </input></span>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default SearchForm;