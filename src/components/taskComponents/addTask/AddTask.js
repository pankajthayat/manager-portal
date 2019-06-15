import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import ProjectModal from "../../modals/projectModal/ProjectModal";
import UserModal from "../../modals/userModal/ManagerModal";

class AddTask extends React.Component {
  state = {
    setDate: false,
    isParentTask: false
  };

  selectParentTask = () => {
    this.setState(presState => ({
      ...this.state,
      isParentTask: !presState.isParentTask
    }));
  };

  renderInput = ({ input, meta, label, col, type, disabled }) => {
    console.log("input : ", input, meta);
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input
            {...input}
            className="form-control"
            placeholder={label}
            disabled={disabled}
            autocomplete="off"
            type={type}
          />{" "}
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };
  renderDate = ({ input, meta, label, col, type, disabled }) => {
    console.log("input : ", input, meta);
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input
            {...input}
            className="form-control"
            placeholder={label}
            disabled={disabled}
            autoComplete="off"
            type={type}
          />
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };

  renderRange = ({ input, meta, label, col, disabled }) => {
    return (
      <div className={`col-sm-${col}`}>
        <input
          {...input}
          type="range"
          class="custom-range"
          min="0"
          max="30"
          disabled={disabled}
        />
        {/* all the meta info are injuected into component here*/}
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  };
  render() {
    const { projects } = this.props;
    const { isParentTask } = this.state;
    return (
      <div class="container">
        <div className="form-component">
          <form>
            <div class="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>Project: </label>
                </div>
                <Field
                  name="project"
                  component={this.renderInput}
                  type="text"
                  col="4"
                />
                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark custom"
                    onClick={() => this.projectModal.open()}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>Task</label>
                </div>
                <Field
                  name="task"
                  component={this.renderInput}
                  type="text"
                  col="6"
                />
              </div>
            </div>
            <div className="form-group">
              <div class="row">
                <div className="col-sm-2" />
                <div className="col-sm-6">
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input "
                      autocomplete="off"
                      onChange={this.selectParentTask}
                    />
                    <label>Parent Task</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>priority: </label>
                </div>
                <Field
                  name="priority"
                  component={this.renderRange}
                  type="range"
                  col="6"
                  disabled={isParentTask}
                />
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>Parent Task: </label>
                </div>
                <Field
                  name="parentTask"
                  component={this.renderInput}
                  type="text"
                  col="4"
                  disabled={isParentTask}
                />
                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark custom"
                    disabled={isParentTask}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>Start Date: </label>
                </div>
                <Field
                  name="startDate"
                  component={this.renderDate}
                  type="date"
                  col="2"
                  disabled={isParentTask}
                />
                <div className="col-sm-2">
                  <label>End Date: </label>
                </div>
                <Field
                  name="endDate"
                  component={this.renderDate}
                  type="date"
                  col="2"
                  disabled={isParentTask}
                />
              </div>
            </div>
            <div className="form-group">
              <div class="row">
                <div className="col-sm-2">
                  <label>Manager: </label>
                </div>
                <Field
                  name="manager"
                  component={this.renderInput}
                  type="text"
                  col="4"
                  disabled={true}
                />
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark custom"
                    onClick={() => this.userModal.open()}
                    disabled={isParentTask}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div class="row">
                <div className="col-sm-4" />
                <div className="col-sm-4">
                  <span className="button-space">
                    <button
                      type="submit"
                      className="btn btn-outline-dark custom"
                    >
                      Add
                    </button>
                  </span>
                  <span className="button-space">
                    <button
                      type="button"
                      className="btn btn-outline-dark custom"
                    >
                      Reset
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
          <ProjectModal
            onRef={ref => {
              this.projectModal = ref;
            }}
          />
          <UserModal
            onUserSelect={this.onUserSelect}
            onRef={ref => {
              this.userModal = ref;
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    projects: state.project.projects || []
  };
};
const mapDisptachToProps = dispatch => {
  return {};
};

AddTask = reduxForm({
  form: "project",
  destroyOnUnmount: false, //to not destroy from data on unmount
  enableReinitialize: true
})(AddTask);

export default connect(
  mapStatetoProps,
  mapDisptachToProps
)(AddTask);

//return  bindActionCreators({change}, dispatch);;