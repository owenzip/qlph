package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.LoginVO;

public interface LoginService {
    LoginVO checkLogin(@Param("tenTaiKhoan") String tenTaiKhoan, @Param("matKhau") String matKhau);
}
