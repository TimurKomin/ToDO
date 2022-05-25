import React, { useState } from "react";
import "../Styles/Pagination.css";
import Button from "./ Button";
import "../Styles/Button.css";
import Todos from "./Todos";
const Pagination = ({
    buttonPage,
    selectPage,
    pagesCurrent,
    setPagesCurrent,
    filterRender,
    classStyle,
    pagination,
    }) => {
    return (
        <div className="block-pagin">
        <Button
            body={"Begining"}
            callback={() => setPagesCurrent((pagesCurrent) => 0)}
        />
        <Button
            body={"<<"}
            callback={() =>
            pagesCurrent >= 1 ? setPagesCurrent(pagesCurrent - 1) : false
            }
            classStyle={"pagins-l"}
        />

        {[...Array(pagination).keys()].map((item) => {
            return (
            <Button
                item={item}
                callback={selectPage}
                classStyle={pagesCurrent === item ? "button-pgn-active" : ""}
                id={item}
                body={item + 1}
                key={Math.random()}
            ></Button>
            );
        })}

        <Button
            body={">>"}
            callback={() =>
            pagesCurrent + 1  < pagination
                ? setPagesCurrent(pagesCurrent + 1)
                : false
            }
            classStyle={"pagins-r"}
        />
        <Button
            body={"In The End"}
            callback={() =>
            setPagesCurrent((pagesCurrent) => (pagesCurrent = pagination - 1))
            }
        />
        </div>
    );
};
export default Pagination;
