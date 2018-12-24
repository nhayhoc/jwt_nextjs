import actions from "../redux/action";
// kiểm tra nếu page loaded từ server? nếu có thì lấy token từ cookies
// nếu page load từ client, kiếm tra token, nếu có chuyển hướng từ (đăng nhập/ đăng kí) về dashboard
export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(actions.reauthenticate);
    }
  } else {
    var token = ctx.store.getState().authentication.token;
    if (token && (ctx.pathname === "/register" || ctx.pathname === "/")) {
      setTimeout(function() {
        Router.push("/dashboard");
      }, 0);
    }
  }
}
