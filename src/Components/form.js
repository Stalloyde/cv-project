"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./form.css");
var TextInput = function (_a) {
    var label = _a.label, id = _a.id, handleProfileInputChange = _a.handleProfileInputChange, handleExperienceInputChange = _a.handleExperienceInputChange, handleEducationInputChange = _a.handleEducationInputChange, className = _a.className;
    var determineInputChange = function (e) {
        if (handleProfileInputChange && className === 'profile-input') {
            handleProfileInputChange(e);
        }
        if (handleExperienceInputChange && className === 'experience-input') {
            handleExperienceInputChange(e);
        }
        if (handleEducationInputChange && className === 'education-input') {
            handleEducationInputChange(e);
        }
    };
    return (React.createElement("div", { className: 'input-container' },
        React.createElement("label", null,
            label,
            React.createElement("input", { type: 'text', id: id, onChange: determineInputChange }))));
};
var DateInput = function (_a) {
    var label = _a.label, id = _a.id, handleExperienceInputChange = _a.handleExperienceInputChange, handleEducationInputChange = _a.handleEducationInputChange, className = _a.className;
    var determineDateChange = function (e) {
        if (handleEducationInputChange && className === 'education-input') {
            handleEducationInputChange(e);
        }
        if (handleExperienceInputChange && className === 'experience-input') {
            handleExperienceInputChange(e);
        }
    };
    return (React.createElement("div", { className: 'input-container' },
        React.createElement("label", null,
            label,
            React.createElement("input", { type: 'date', id: id, onChange: determineDateChange }))));
};
var TechStackForm = function (_a) {
    var handleTechInputChange = _a.handleTechInputChange, handleSubmit = _a.handleSubmit, currentTech = _a.currentTech, techStack = _a.techStack, onRemoveTech = _a.onRemoveTech;
    var handleRemove = function (e) {
        var updatedTechStack = techStack.filter(function (item) {
            if (item) {
                return item.id !== e.currentTarget.id;
            }
            return null;
        });
        onRemoveTech(updatedTechStack);
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("label", null,
            React.createElement("input", { type: 'text', value: currentTech.text, onChange: handleTechInputChange, placeholder: 'Insert proficient technology here' })),
        React.createElement("input", { type: 'submit', value: 'Add' }),
        techStack && (React.createElement("ul", { className: 'tech-stack-container' }, techStack.map(function (item) {
            return item && (React.createElement("li", { key: item.id, id: item.id },
                React.createElement("div", null, item.text),
                React.createElement("div", null,
                    React.createElement("button", { id: item.id, className: 'remove-stack-btn', onClick: handleRemove }, "Remove"))));
        })))));
};
var ExperienceInputs = function (_a) {
    var handleExperienceInputChange = _a.handleExperienceInputChange, experiences = _a.experiences, onRemoveExperience = _a.onRemoveExperience, id = _a.id;
    var handleRemove = function () {
        var updatedExperiences = experiences.filter(function (item) {
            if (item) {
                return item.id !== id;
            }
            return null;
        });
        onRemoveExperience(updatedExperiences);
    };
    return (React.createElement("div", { className: 'form-experience-inputs-container', id: id },
        React.createElement(TextInput, { label: 'Position:', className: 'experience-input', id: "position-".concat(id), key: id, handleExperienceInputChange: handleExperienceInputChange }),
        React.createElement(TextInput, { label: 'Company:', className: 'experience-input', id: "company-".concat(id), handleExperienceInputChange: handleExperienceInputChange }),
        React.createElement(TextInput, { label: 'City:', className: 'experience-input', id: "city-".concat(id), handleExperienceInputChange: handleExperienceInputChange }),
        React.createElement(DateInput, { label: 'Start Date:', className: 'experience-input', id: "startDate-".concat(id), handleExperienceInputChange: handleExperienceInputChange }),
        React.createElement(DateInput, { label: 'End Date:', className: 'experience-input', id: "endDate-".concat(id), handleExperienceInputChange: handleExperienceInputChange }),
        React.createElement("div", { className: 'description input-container' },
            React.createElement("label", null,
                "Summary:",
                React.createElement("textarea", { placeholder: 'Insert key achievements/roles here', maxLength: 350, className: 'experience-input', id: "description-".concat(id), onChange: handleExperienceInputChange }))),
        React.createElement("div", { className: 'remove-btn' },
            React.createElement("button", { onClick: handleRemove }, "Remove"))));
};
var EducationInputs = function (_a) {
    var handleEducationInputChange = _a.handleEducationInputChange, id = _a.id, onRemoveEducation = _a.onRemoveEducation, educations = _a.educations;
    var handleRemove = function () {
        var updatedEducations = educations.filter(function (item) {
            if (item) {
                return item.id !== id;
            }
            return null;
        });
        onRemoveEducation(updatedEducations);
    };
    return (React.createElement("div", { className: 'form-education-inputs-container', id: id },
        React.createElement(TextInput, { label: 'University:', id: "university-".concat(id), className: 'education-input', handleEducationInputChange: handleEducationInputChange }),
        React.createElement(TextInput, { label: 'City:', id: "city-".concat(id), className: 'education-input', handleEducationInputChange: handleEducationInputChange }),
        React.createElement(TextInput, { label: 'Course:', id: "course-".concat(id), className: 'education-input', handleEducationInputChange: handleEducationInputChange }),
        React.createElement(DateInput, { label: 'Start Date:', id: "startDate-".concat(id), className: 'education-input', handleEducationInputChange: handleEducationInputChange }),
        React.createElement(DateInput, { label: 'End Date:', id: "endDate-".concat(id), className: 'education-input', handleEducationInputChange: handleEducationInputChange }),
        React.createElement("div", { className: 'description input-container' },
            React.createElement("label", null,
                "Summary:",
                React.createElement("textarea", { placeholder: 'Insert key achievements/roles here', maxLength: 350, className: 'education-input', id: "description-".concat(id), onChange: handleEducationInputChange }))),
        React.createElement("div", { className: 'remove-btn' },
            React.createElement("button", { onClick: handleRemove }, "Remove"))));
};
var Form = function (_a) {
    var currentTech = _a.currentTech, techStack = _a.techStack, experience = _a.experience, experiences = _a.experiences, education = _a.education, educations = _a.educations, handleAddExperience = _a.handleAddExperience, handleAddEducation = _a.handleAddEducation, onRemoveExperience = _a.onRemoveExperience, onRemoveEducation = _a.onRemoveEducation, onRemoveTech = _a.onRemoveTech, handleProfileInputChange = _a.handleProfileInputChange, handleExperienceInputChange = _a.handleExperienceInputChange, handleEducationInputChange = _a.handleEducationInputChange, handleTechInputChange = _a.handleTechInputChange, handleSubmit = _a.handleSubmit;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'form-profile-container' },
            React.createElement("h1", null, "Profile"),
            React.createElement("div", { className: 'form-profile-inputs-container' },
                React.createElement(TextInput, { className: 'profile-input', label: 'First Name:', id: 'firstName', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Last Name:', id: 'lastName', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Current Position:', id: 'currentPosition', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Email:', id: 'email', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Contact Number:', id: 'contactNumber', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Github:', id: 'github', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'Portfolio Site:', id: 'portfolio', handleProfileInputChange: handleProfileInputChange }),
                React.createElement(TextInput, { className: 'profile-input', label: 'LinkedIn:', id: 'linkedin', handleProfileInputChange: handleProfileInputChange }),
                React.createElement("label", { className: 'description input-container' },
                    "Summary:",
                    React.createElement("textarea", { className: 'profile-input', id: 'summary', placeholder: 'Insert short bio here', maxLength: 250, onChange: handleProfileInputChange })))),
        React.createElement("div", { className: 'form-tech-stack-container' },
            React.createElement("h1", null, "Technology Stack"),
            React.createElement(TechStackForm, { currentTech: currentTech, techStack: techStack, handleTechInputChange: handleTechInputChange, handleSubmit: handleSubmit, onRemoveTech: onRemoveTech })),
        React.createElement("div", { className: 'form-experience-container' },
            React.createElement("h1", null, "Professional Experiences"),
            experiences.map(function (item) {
                return item && (React.createElement(ExperienceInputs, { key: item.id, id: item.id, experience: experience, experiences: experiences, onRemoveExperience: onRemoveExperience, handleExperienceInputChange: handleExperienceInputChange }));
            }),
            React.createElement("button", { onClick: handleAddExperience }, "Add Experience")),
        React.createElement("div", { className: 'form-education-container' },
            React.createElement("h1", null, "Education"),
            educations.map(function (item) {
                return item && (React.createElement(EducationInputs, { key: item.id, id: item.id, education: education, educations: educations, onRemoveEducation: onRemoveEducation, handleEducationInputChange: handleEducationInputChange }));
            }),
            React.createElement("button", { onClick: handleAddEducation }, "Add Education"))));
};
exports.default = Form;
