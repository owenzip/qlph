package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.UserVO;

public interface UserService {
    UserVO checkLogin(@Param("mssv") String mssv, @Param("matKhau") String matKhau);

    UserVO checkPassword(@Param("matKhau") String matKhau, @Param("idNguoiDung") int idNguoiDung);

    void changePassword(@Param("matKhau") String matKhau, @Param("idNguoiDung") int idNguoiDung);
}
