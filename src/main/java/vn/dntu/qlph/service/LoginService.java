package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.UserVO;

public interface LoginService {
    UserVO checkLogin(@Param("mssv") String mssv, @Param("matKhau") String matKhau);
}
