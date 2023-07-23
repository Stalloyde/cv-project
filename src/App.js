"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var React = require("react");
var react_1 = require("react");
var form_1 = require("./Components/form");
var preview_1 = require("./Components/preview");
var uniqid = require("uniqid");
var format_1 = require("date-fns/format");
var App = function () {
    var _a = (0, react_1.useState)({
        firstName: '',
        lastName: '',
        currentPosition: '',
        email: '',
        contactNumber: '',
        github: '',
        portfolio: '',
        linkedin: '',
        summary: '',
    }), profile = _a[0], setProfile = _a[1];
    var _b = (0, react_1.useState)([]), techStack = _b[0], setTechStack = _b[1];
    var _c = (0, react_1.useState)({
        text: '',
        id: '',
    }), currentTech = _c[0], setCurrentTech = _c[1];
    var _d = (0, react_1.useState)([]), experiences = _d[0], setExperiences = _d[1];
    var _e = (0, react_1.useState)({
        id: '',
        position: '',
        company: '',
        city: '',
        startDate: null,
        endDate: null,
        summary: '',
    }), experience = _e[0], setExperience = _e[1];
    var _f = (0, react_1.useState)([]), educations = _f[0], setEducations = _f[1];
    var _g = (0, react_1.useState)({
        id: '',
        university: '',
        city: '',
        course: '',
        startDate: null,
        endDate: null,
        summary: '',
    }), education = _g[0], setEducation = _g[1];
    var handleProfileInputChange = function (e) {
        setProfile({
            firstName: e.currentTarget.id === 'firstName'
                ? e.currentTarget.value
                : profile.firstName,
            lastName: e.currentTarget.id === 'lastName'
                ? e.currentTarget.value
                : profile.lastName,
            currentPosition: e.currentTarget.id === 'currentPosition'
                ? e.currentTarget.value
                : profile.currentPosition,
            email: e.currentTarget.id === 'email' ? e.currentTarget.value : profile.email,
            contactNumber: e.currentTarget.id === 'contactNumber'
                ? e.currentTarget.value
                : profile.contactNumber,
            github: e.currentTarget.id === 'github'
                ? e.currentTarget.value
                : profile.github,
            portfolio: e.currentTarget.id === 'portfolio'
                ? e.currentTarget.value
                : profile.portfolio,
            linkedin: e.currentTarget.id === 'linkedin'
                ? e.currentTarget.value
                : profile.linkedin,
            summary: e.currentTarget.id === 'summary'
                ? e.currentTarget.value
                : profile.summary,
        });
    };
    var handleExperienceInputChange = function (e) {
        var updatedExperiences = experiences.map(function (item) {
            if (item && e.currentTarget && item.id === e.currentTarget.id.slice(-8)) {
                return {
                    id: item.id,
                    position: e.currentTarget.id === "position-".concat(item.id)
                        ? e.currentTarget.value
                        : item.position,
                    company: e.currentTarget.id === "company-".concat(item.id)
                        ? e.currentTarget.value
                        : item.company,
                    city: e.currentTarget.id === "city-".concat(item.id)
                        ? e.currentTarget.value
                        : item.city,
                    startDate: e.currentTarget.id === "startDate-".concat(item.id)
                        ? (0, format_1.default)(new Date(e.currentTarget.value), 'MMM yyyy')
                        : item.startDate,
                    endDate: e.currentTarget.id === "endDate-".concat(item.id)
                        ? (0, format_1.default)(new Date(e.currentTarget.value), 'MMM yyyy')
                        : item.endDate,
                    summary: e.currentTarget.id === "description-".concat(item.id)
                        ? e.currentTarget.value
                        : item.summary,
                };
            }
            else {
                return item;
            }
        });
        setExperiences(updatedExperiences);
    };
    var handleEducationInputChange = function (e) {
        var updatedEducations = educations.map(function (item) {
            if (item && e.currentTarget && item.id === e.currentTarget.id.slice(-8)) {
                return {
                    id: item.id,
                    university: e.currentTarget.id === "university-".concat(item.id)
                        ? e.currentTarget.value
                        : item.university,
                    city: e.currentTarget.id === "city-".concat(item.id)
                        ? e.currentTarget.value
                        : item.city,
                    course: e.currentTarget.id === "course-".concat(item.id)
                        ? e.currentTarget.value
                        : item.course,
                    startDate: e.currentTarget.id === "startDate-".concat(item.id)
                        ? (0, format_1.default)(new Date(e.currentTarget.value), 'MMM yyyy')
                        : item.startDate,
                    endDate: e.currentTarget.id === "endDate-".concat(item.id)
                        ? (0, format_1.default)(new Date(e.currentTarget.value), 'MMM yyyy')
                        : item.endDate,
                    summary: e.currentTarget.id === "description-".concat(item.id)
                        ? e.currentTarget.value
                        : item.summary,
                };
            }
            else {
                return item;
            }
        });
        setEducations(updatedEducations);
    };
    var handleTechInputChange = function (e) {
        setCurrentTech({ text: e.currentTarget.value, id: uniqid() });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (currentTech.text) {
            setTechStack(techStack.concat(currentTech));
            setCurrentTech({ text: '', id: '' });
        }
    };
    var handleAddExperience = function () {
        var newExperience = {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            startDate: null,
            endDate: null,
            summary: '',
        };
        setExperiences(experiences.concat(newExperience));
        setExperience(newExperience);
    };
    var handleAddEducation = function () {
        var newEducation = {
            id: uniqid(),
            university: '',
            city: '',
            course: '',
            startDate: null,
            endDate: null,
            summary: '',
        };
        setEducations(educations.concat(newEducation));
        setEducation(newEducation);
    };
    var onRemoveExperience = function (updatedExperiences) {
        setExperience({
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            startDate: null,
            endDate: null,
            summary: '',
        });
        setExperiences(updatedExperiences);
    };
    var onRemoveEducation = function (updatedEducations) {
        setEducation({
            id: uniqid(),
            university: '',
            city: '',
            course: '',
            startDate: null,
            endDate: null,
            summary: '',
        });
        setEducations(updatedEducations);
    };
    var onRemoveTech = function (updatedTechStack) {
        setTechStack(updatedTechStack);
    };
    return (React.createElement("main", { className: 'main-container' },
        React.createElement("section", { className: 'form-container' },
            React.createElement(form_1.default, { currentTech: currentTech, techStack: techStack, experience: experience, experiences: experiences, education: education, educations: educations, handleAddEducation: handleAddEducation, handleAddExperience: handleAddExperience, onRemoveEducation: onRemoveEducation, onRemoveExperience: onRemoveExperience, onRemoveTech: onRemoveTech, handleProfileInputChange: handleProfileInputChange, handleExperienceInputChange: handleExperienceInputChange, handleEducationInputChange: handleEducationInputChange, handleTechInputChange: handleTechInputChange, handleSubmit: handleSubmit })),
        React.createElement("section", { className: 'preview-container' },
            React.createElement(preview_1.default, { profile: profile, currentTech: currentTech, techStack: techStack, experiences: experiences, educations: educations }))));
};
exports.default = App;
