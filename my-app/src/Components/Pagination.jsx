import React from "react";
import "../Styles/Pagination.css";
import Button from "./ Button";
import "../Styles/Button.css";
const Pagination = ({
    countButtons,
    selectPage,
    currentPage,
    setCurrentPage,
    totalPage,
    }) => {
        
    return (
        <div className="block-pagin">
        <Button
            type = "primary"
            body={"Begining"}
            callback={() => setCurrentPage((currentPage) => 0)}
        />
        <Button
            type = "primary"
            body={"<<"}
            callback={() =>
            currentPage >= 1 ? setCurrentPage(currentPage - 1) : false
            }
        />

        {countButtons.map((item) => {
            return (
            <Button
            type = {currentPage === item ? "primary" : "ghost"}
            // style 
                item={item}
                callback={selectPage}
                // classStyle={currentPage === item ? "button-pgn-active" : ""}
                id={item}
                body={item + 1}
                key={Math.random()}
            ></Button>
            );
        })}

        <Button
        type = "primary"
            body={">>"}
            callback={() =>
            currentPage + 1  < totalPage
                ? setCurrentPage(currentPage + 1)
                : false
            }
        />
        <Button
        type = "primary"
            body={"In The End"}
            callback={() =>
            setCurrentPage((currentPage) => (currentPage = totalPage - 1))
            }
        />
        </div>
    );
};
export default Pagination;
