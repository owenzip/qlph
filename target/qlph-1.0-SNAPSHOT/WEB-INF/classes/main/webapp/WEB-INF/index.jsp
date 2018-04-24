<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <jsp:include page="views/resource.jsp"/>
    <title>PHẦN MỀM QUẢN LÝ THƯ VIỆN</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <div class="account-wall">
                <div id="my-tab-content" class="tab-content">
                    <div class="tab-pane active" id="login">
                        <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                             alt="">
                        <form class="form-signin" action="" method="">
                            <input type="text" class="form-control" placeholder="Username" required autofocus>
                            <input type="password" class="form-control" placeholder="Password" required>
                            <input type="submit" class="btn btn-lg btn-default btn-block" value="Sign In" />
                        </form>
                        <div data-tabs="tabs">
                            <p class="text-center"><a href="#register" data-toggle="tab">Need an Account?</a></p>
                            <p class="text-center"><a href="#select" data-toggle="tab">Select Account</a></p>
                        </div>
                    </div>
                    <div class="tab-pane" id="register">
                        <form class="form-signin" action="" method="">
                            <input type="text" class="form-control" placeholder="User Name ..." required autofocus>
                            <input type="email" class="form-control" placeholder="Emaill Address ..." required>
                            <input type="password" class="form-control" placeholder="Password ..." required>
                            <input type="submit" class="btn btn-lg btn-default btn-block" value="Sign Up" />
                        </form>
                        <div data-tabs="tabs">
                            <p class="text-center"><a href="#login" data-toggle="tab">Have an Account?</a></p>
                        </div>
                    </div>
                    <div class="tab-pane" id="select">
                        <div data-tabs="tabs">
                            <div class="media account-select">
                                <a href="#user1" data-toggle="tab">
                                    <div class="pull-left">
                                        <img class="select-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                             alt="">
                                    </div>
                                    <div class="media-body">
                                        <h4 class="select-name">User Name 1</h4>
                                    </div>
                                </a>
                            </div>
                            <hr />
                            <div class="media account-select">
                                <a href="#user2" data-toggle="tab">
                                    <div class="pull-left">
                                        <img class="select-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                             alt="">
                                    </div>
                                    <div class="media-body">
                                        <h4 class="select-name">User Name 2</h4>
                                    </div>
                                </a>
                            </div>
                            <hr />
                            <p class="text-center"><a href="#login" data-toggle="tab">Back to Login</a></p>
                        </div>
                    </div>
                    <div class="tab-pane" id="user1">
                        <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                             alt="">
                        <h3 class="text-center">User Name 1</h3>
                        <form class="form-signin" action="" method="">
                            <input type="hidden" class="form-control" value="User Name">
                            <input type="password" class="form-control" placeholder="Password" autofocus required>
                            <input type="submit" class="btn btn-lg btn-default btn-block" value="Sign In" />
                        </form>
                        <p class="text-center"><a href="#login" data-toggle="tab">Back to Login</a></p>
                        <p class="text-center"><a href="#select" data-toggle="tab">Select another Account</a></p>
                    </div>
                    <div class="tab-pane" id="user2">
                        <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                             alt="">
                        <h3 class="text-center">User Name 2</h3>
                        <form class="form-signin" action="" method="">
                            <input type="hidden" class="form-control" value="User Name">
                            <input type="password" class="form-control" placeholder="Password" autofocus required>
                            <input type="submit" class="btn btn-lg btn-default btn-block" value="Sign In" />
                        </form>
                        <p class="text-center"><a href="#login" data-toggle="tab">Back to Login</a></p>
                        <p class="text-center"><a href="#select" data-toggle="tab">Select another Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<c:url value="/main/webapp/resources/js/forms/login.js"/>"></script>
</html>
