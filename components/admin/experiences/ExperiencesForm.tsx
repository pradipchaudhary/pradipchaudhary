import React from "react";
import "quill/dist/quill.core.css";
const ExperiencesForm = () => {
    return (
        <div>
            <h1>Experiences</h1>
            <form action="">
                <div className="bt-4">
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                </div>
                <div className="bt-4">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={10}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default ExperiencesForm;
