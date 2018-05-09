/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;

public interface ContactService {

    void insertContact(@Param("idVanDe") int idVanDe, @Param("sdt") int sdt, @Param("noiDung") String noiDung, @Param("email") String email);
}
