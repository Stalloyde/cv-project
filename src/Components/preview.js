"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./preview.css");
var PreviewExperience = function (_a) {
    var experiences = _a.experiences;
    return (React.createElement(React.Fragment, null, experiences.map(function (item) {
        if (item) {
            return (React.createElement("section", { className: 'preview-experience-content', id: "experience-".concat(item.id), key: "experience-".concat(item.id) },
                React.createElement("h2", null,
                    item.company,
                    " | ",
                    item.city),
                React.createElement("h2", null, item.position),
                React.createElement("h2", null,
                    React.createElement(React.Fragment, null,
                        item.startDate,
                        " - ",
                        item.endDate)),
                React.createElement("div", { className: 'summary' }, item.summary)));
        }
        return null;
    })));
};
var PreviewEducation = function (_a) {
    var educations = _a.educations;
    return (React.createElement(React.Fragment, null, educations.map(function (item) {
        if (item) {
            return (React.createElement("section", { className: 'preview-education-content', id: "education-".concat(item.id), key: "education-".concat(item.id) },
                React.createElement("h2", null,
                    item.university,
                    " | ",
                    item.city),
                React.createElement("h2", null, item.course),
                React.createElement("h2", null,
                    React.createElement(React.Fragment, null,
                        item.startDate,
                        " - ",
                        item.endDate)),
                React.createElement("div", { className: 'summary' }, item.summary)));
        }
        return null;
    })));
};
var Preview = function (_a) {
    var profile = _a.profile, techStack = _a.techStack, experiences = _a.experiences, educations = _a.educations;
    return (React.createElement("main", null,
        React.createElement("section", { className: 'preview-profile-container' },
            React.createElement("h1", null,
                profile.firstName,
                " ",
                profile.lastName),
            React.createElement("h2", null,
                " ",
                profile.currentPosition,
                " "),
            React.createElement("div", { className: 'summary' }, profile.summary)),
        React.createElement("section", { className: 'preview-content-container' },
            React.createElement("section", { className: 'side-content-container' },
                React.createElement("div", { className: 'preview-contact-info-container' },
                    React.createElement("div", { className: 'contact-info' },
                        React.createElement("h2", null, " Email "),
                        React.createElement("p", null, profile.email)),
                    React.createElement("div", { className: 'contact-info' },
                        React.createElement("h2", null, " Contact Number "),
                        React.createElement("p", null, profile.contactNumber)),
                    React.createElement("div", { className: 'contact-info' },
                        React.createElement("h2", null, " Github "),
                        React.createElement("a", { href: '' }, profile.github)),
                    React.createElement("div", { className: 'contact-info' },
                        React.createElement("h2", null, " Portfolio "),
                        React.createElement("a", { href: '' }, profile.portfolio)),
                    React.createElement("div", { className: 'contact-info' },
                        React.createElement("h2", null, " LinkedIn "),
                        React.createElement("a", { href: '' }, profile.linkedin)),
                    React.createElement("div", { className: 'tech-stack-info' },
                        React.createElement("h2", null, " Tech Stack "),
                        React.createElement("p", null, techStack.map(function (item) { return item && React.createElement("li", { key: item.id },
                            " ",
                            item.text); }))))),
            React.createElement("section", { className: 'main-content-container' },
                React.createElement("section", { className: 'preview-experience-container' },
                    React.createElement("h2", null, "Professional Experiences"),
                    React.createElement(PreviewExperience, { experiences: experiences })),
                React.createElement("section", { className: 'preview-education-container' },
                    React.createElement("h2", null, "Education"),
                    React.createElement(PreviewEducation, { educations: educations }))))));
};
exports.default = Preview;
