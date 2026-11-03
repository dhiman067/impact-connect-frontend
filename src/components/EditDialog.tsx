import React from 'react';

const EditDialog = () => {
    return (
        <div>
            <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-violet-200 bg-violet-50 px-3 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2"
            >
                <span aria-hidden="true">✎</span>
                Edit
            </button>
        </div>
    );
};

export default EditDialog;