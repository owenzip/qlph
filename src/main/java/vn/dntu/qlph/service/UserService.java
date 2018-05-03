package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.UserVO;

public interface UserService {
    UserVO checkLogin(@Param("mssv") String mssv, @Param("matKhau") String matKhau);

    void changePassword(@Param("matKhau") String matKhau, @Param("idNguoiDung") int idNguoiDung);
}
