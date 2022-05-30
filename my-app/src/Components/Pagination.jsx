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
            body={"Begining"}
            callback={() => setCurrentPage((currentPage) => 0)}
        />
        <Button
            body={"<<"}
            callback={() =>
            currentPage >= 1 ? setCurrentPage(currentPage - 1) : false
            }
            classStyle={"pagins-l"}
        />

        {countButtons.map((item) => {
            return (
            <Button
                item={item}
                callback={selectPage}
                classStyle={currentPage === item ? "button-pgn-active" : ""}
                id={item}
                body={item + 1}
                key={Math.random()}
            ></Button>
            );
        })}

        <Button
            body={">>"}
            callback={() =>
            currentPage + 1  < totalPage
                ? setCurrentPage(currentPage + 1)
                : false
            }
            classStyle={"pagins-r"}
        />
        <Button
            body={"In The End"}
            callback={() =>
            setCurrentPage((currentPage) => (currentPage = totalPage - 1))
            }
        />
        </div>
    );
};
export default Pagination;
