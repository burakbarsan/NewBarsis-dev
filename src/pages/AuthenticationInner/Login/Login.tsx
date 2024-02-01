import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  FormFeedback,
  Form,
  Spinner,
  CardBody,
  InputGroup,
  InputGroupText,
  Carousel,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import withRouter from "../../../Components/Common/withRouter";
import LanguageDropdown from "../../../Components/Common/LanguageDropdown";
import AuthSlider from "../authCarousel";
import { loginUser } from "../../../slices/thunks";
import { useDispatch } from "react-redux";

const Login = (props: any) => {
  const dispatch: any = useDispatch();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("The Username field is required"),
      password: Yup.string().required("The Password field is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        setLoginSuccessful(true);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setLoading(false);
      }
    },
    
  });
  const handleButtonClick = (values1: any) => {
    setLoading(true); 
    dispatch(loginUser(values1, props.router.navigate));
  };
  const renderDropdown = () => {
    return (
      <div className="mb-3 position-relative">
        <Label for="versionDropdown">Choose Barsis Version:</Label>
        <Input
          type="select"
          name="version"
          id="versionDropdown"
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.version || ""}
        >
          <option value="" disabled>
            Select a version
          </option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Input>
        <div className="mt-4">
                              <Button
                                disabled={loading && true}
                                color={loading ? "tranparent": "primary"}
                                className="w-100 login-button"   
                                type="submit"
                                onClick={handleButtonClick}
                              >
                                {loading && (
                                  <Spinner size="sm" className="me-2 primary-900">
                                    Loading...
                                  </Spinner>
                                )}
                                {loading ? 
                                "" :  "GO ON"}
                              </Button>
                            </div> 
      </div>



      
    );
  };
  document.title = "Barsis | Enter Barsis World Now!";



  return (
    <React.Fragment>
      <div className="auth-page-wrapper d-flex">
        <div className="auth-page-content overflow-hidden">
          <Container>
            <Row>
              {/* Slider Area */}
              <Col lg={7} className="login-page">
                <Card className="overflow-hidden login-slider mb-0">
                  <div className="live-preview">
                    <AuthSlider />
                  </div>
                </Card>
              </Col>

              {/* Form Area */}
              <Col lg={5} className="login-bg">
                <div className="login-language">
                  <LanguageDropdown />
                </div>
                <div className="overflow-hidden form-section">
                  <Row className="g-0 login-form-section">
                    <Col lg={12}>
                      <div className="p-lg-5 p-4 form-section-login">
                        <div>
                          <h2 className="login-baslik">Welcome Back !</h2>
                          <p className="text-paragraph">
                            Please enter your details.
                          </p>
                        </div>
                        {loginSuccessful ? (
                              renderDropdown()
                            ) : (
                        <div className="mt-4">
                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                            action="#"
                          >
                            
                            <div className="mb-3 position-relative">
                              <div className="form-icon">
                                <Input
                                  type="text"
                                  className="form-control form-control-icon login-input-text"
                                  id="username"
                                  placeholder="Username"
                                  name="userName"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.userName || ""}
                                  invalid={
                                    validation.touched.userName &&
                                    validation.errors.userName
                                      ? true
                                      : false
                                  }
                                />
                                <i className="ri-user-line"></i>
                                {validation.touched.userName &&
                                validation.errors.userName ? (
                                  <FormFeedback
                                    className="align-middle"
                                    type="invalid"
                                  >
                                    {validation.errors.userName}
                                  </FormFeedback>
                                ) : null}
                                
                              </div>
                            </div>

                            <div className="mb-3">
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <div className="form-icon">
                                  <Input
                                    type={passwordShow ? "text" : "password"}
                                    className="form-control form-control-icon pe-5 password-input login-input-text"
                                    defaultValue="123123123"
                                    placeholder="Password"
                                    id="password-input"
                                    name="password"
                                    value={validation.values.password || ""}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    invalid={
                                      validation.touched.password &&
                                      validation.errors.password
                                        ? true
                                        : false
                                    }
                                  />
                                  <i className="ri-lock-password-line align-middle"></i>
                                  {validation.touched.password &&
                                  validation.errors.password ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.password}
                                    </FormFeedback>
                                  ) : null}
                                </div>

                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                  onClick={() => setPasswordShow(!passwordShow)}
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </button>
                              </div>
                            </div>
 
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="auth-remember-check"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="auth-remember-check"
                              >
                                Remember me
                              </Label>
                            </div>

                            <div className="mt-4">
                              <Button
                                disabled={loading && true}
                                color={loading ? "tranparent": "primary"}
                                className="w-100 login-button"   
                                type="submit"
                              >
                                {loading && (
                                  <Spinner size="sm" className="me-2 primary-900">
                                    Loading...
                                  </Spinner>
                                )}
                                {loading ? 
                                "" :  "Login"}
                              </Button>
                            </div> 
                          </Form>
                        </div> )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);
