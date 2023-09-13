'use client'
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.step === 2 ? "Form A":"Form B"}</p>
            <p>Age: {formData.age}</p>

            {formData.step === 2 && <p>DC Shows: {formData.show}</p>}

            {formData.step === 3 && <p>Marvel Shows: {formData.show}</p>}

        </div>
    );
}
export default Summary;