/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {

    let tblRoomAdmin = $('#tblRoomAdmin');
    let tblMemberRoomAdmin = $('#tblMemberRoomAdmin');
    let tblRoomAdminFunction = undefined;
    let tblMemberRoomAdminFunction = undefined;
    let idPhong = 0;

    let setup = function () {
        onClickConvertTab();
        tblRoomAdminFunction = configTableRoomAdmin;
        onClickTableRoomAdmin();
        onClickMenuRoom();
        configTableContactAdmin();
        //deleteContact();

    };

    let onClickConvertTab = function () {
        $('#formTabRoom,#formTabCategory,#formTabStatis').hide();
        $('.btnTabRoom').on('click', function () {
            $('#formTabRoom').show();
            $('#formTabCategory,#formTabStatis,#formTabMail').hide();
        })
        $('.btnTabCategory').on('click', function () {
            $('#formTabCategory').show();
            $('#formTabRoom,#formTabStatis,#formTabMail').hide();
        })
        $('.btnTabStatis').on('click', function () {
            $('#formTabStatis').show();
            $('#formTabRoom,#formTabCategory,#formTabMail').hide();
        })
        $('.btnTabMail').on('click', function () {
            $('#formTabMail').show();
            $('#formTabRoom,#formTabCategory,#formTabStatis').hide();
        })
    };

    let configTableRoomAdmin = tblRoomAdmin.DataTable({
        "autoWidth": false,
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "/selectAllRoom.do",
            "data": function (data) {
                data.trangThai = $('#trangThai').val();
            },
            "dataSrc": "",
        },
        "columnDefs": [
            {
                "targets": "_all",
                class: "text-center",
            }, {
                "targets": 0,
                render: function (data, type, row, meta) {
                    let rowIndex = parseInt(meta.row);
                    let startAt = parseInt(meta.settings._iDisplayStart);
                    return rowIndex + startAt + 1;
                }
            }, {
                "targets": 1,
                "sWidth": "15%",
                "data": "tenPhong",
            }, {
                "targets": 2,
                "sWidth": "20%",
                "data": "tenNguoiDaiDien",
            }, {
                "targets": 3,
                "sWidth": "10%",
                "data": "ngay",
            }, {
                "targets": 4,
                "sWidth": "15%",
                render: function (data, type, row) {
                    return row.gioBatDau + " - " + row.gioKetThuc
                }
            }, {
                "targets": 5,
                "sWidth": "10%",
                "data": "trangThai"
            }, {
                "targets": 6,
                "sWidth": "5%",
                "data": "soNguoi"
            }, {
                "targets": 7,
                "sWidth": "15%",
                "data": "mucDich"
            },
        ],
    });

    let configTableContactAdmin = function () {
        $.ajax({
            url: "/selectListContact.do",
            data: {},
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '';
                    $.each(data, function (index, item) {
                        html += '<tr>';
                        html += '<td class="text-center">' + (index + 1) + '</td>'
                        html += '<td class="text-center">' + item.ten + '</td>';
                        html += '<td class="text-center">' + item.vanDe + '</td>';
                        html += '<td class="text-center">' + item.sdt + '</td>';
                        html += '<td class="text-center">' + item.email + '</td>';
                        html += '<td class="text-center">' + item.noiDung + '</td>';
                        html += '<td class="text-center">' + item.ngay + '</td>';
                        html += '<td class="text-center">' + item.gio + '</td>';
                        html += '<td class="text-center" style="padding: 0"><button data-id="' + item.idLienHe + '" onclick="deleteContact(' + item.idLienHe + ');" class="btn btn-red btnDeleteContact" style="padding: 11px 13px 11px 13px;"><i class="fa fa-trash"></i></td>'
                        html += '</tr>';
                    })
                    $('#tblContactAdmin').html(html);
                }
            }
        })
    };

    this.deleteContact = function (idLienHe) {
        $.confirm({
            title: 'Bạn có chắc chắn muốn xóa liên hệ này ?', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/deleteContact.do",
                            data: {
                                'idLienHe': idLienHe
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Xóa liên hệ thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableContactAdmin();
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Xóa liên hệ thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        })
                    }
                },
            }
        });
    }

    /*let configTableContactAdmin = tblContactAdmin.dataTable({
        "autoWidth": false,
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "/selectListContact.do",
            "data": {},
            "dataSrc": "",
        },
        "columnDefs": [
            {
                "targets": "_all",
                class: "text-center",
            }, {
                "targets": 0,
                render: function (data, type, row, meta) {
                    let rowIndex = parseInt(meta.row);
                    let startAt = parseInt(meta.settings._iDisplayStart);
                    return rowIndex + startAt + 1;
                }
            }, {
                "targets": 1,
                "sWidth": "15%",
                "data": "ten",
            }, {
                "targets": 2,
                "sWidth": "15%",
                "data": "vanDe",
            }, {
                "targets": 3,
                "sWidth": "10%",
                "data": "sdt",
            }, {
                "targets": 4,
                "sWidth": "10%",
                "data": "email"
            }, {
                "targets": 5,
                "sWidth": "25%",
                "data": "noiDung"
            }, {
                "targets": 6,
                "sWidth": "10%",
                "data": "ngay"
            }, {
                "targets": 7,
                "sWidth": "10%",
                "data": "gio"
            },
        ],
    });*/

    let onClickMenuRoom = function () {
        $('#btnAllRoom').on('click', function () {
            $('#trangThai').val("");
            tblRoomAdminFunction.ajax.reload();
        })
        $('#btnBookedRoom').on('click', function () {
            $('#trangThai').val("1");
            tblRoomAdminFunction.ajax.reload();
        })
        $('#btnLiveRoom').on('click', function () {
            $('#trangThai').val("2");
            tblRoomAdminFunction.ajax.reload();
        })
        $('#btnEndRoom').on('click', function () {
            $('#trangThai').val("3");
            tblRoomAdminFunction.ajax.reload();
        })
        $('#btnCancelledRoom').on('click', function () {
            $('#trangThai').val("4");
            tblRoomAdminFunction.ajax.reload();
        })
        $('#btnWaitRoom').on('click', function () {
            $('#trangThai').val("5");
            tblRoomAdminFunction.ajax.reload();
        })
    };

    let onClickTableRoomAdmin = function () {
        tblMemberRoomAdminFunction = tblMemberRoomAdmin.DataTable({
            "bAutoWidth": false,
            "serverSide": true,
            "processing": true,
            "deferLoading": 0,
            "ajax": {
                "url": "/selectMembersByRoom.do",
                "data": function (param) {
                    param.idPhong = idPhong;
                },
                "dataSrc": "",
            },
            "columnDefs": [
                {
                    "targets": "_all",
                    class: "text-center",
                }, {
                    "targets": 0,
                    "sWidth": "5%",
                    render: function (data, type, row, meta) {
                        let rowIndex = parseInt(meta.row);
                        let startAt = parseInt(meta.settings._iDisplayStart);
                        return rowIndex + startAt + 1;
                    }
                }, {
                    "targets": 1,
                    "sWidth": "50%",
                    "data": "tenNguoiDungDetails",
                }, {
                    "targets": 2,
                    "sWidth": "25%",
                    "data": "lopDetails",
                }, {
                    "targets": 3,
                    "sWidth": "25%",
                    "data": "mssvDetails"
                },
            ],
        });

        tblRoomAdmin.find('tbody').on('click', 'tr', function () {
            let dataTable = tblRoomAdminFunction.row(this).data();
            idPhong = dataTable.idPhong;
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                tblRoomAdminFunction.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
                $('#modalSelectRoom').modal('show');
                tblMemberRoomAdminFunction.ajax.reload();
            }
        })

        $('#btnCanceledRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Bạn có chắc chắn muốn hủy phòng', content: '', type: 'red', typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/updateStatus.do",
                                data: {
                                    'idPhong': idPhong,
                                    'trangThai': 4
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Hủy phòng thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Hủy phòng thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        })

        $('#btnLiveRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Chuyển trạng thái phòng này sang ĐANG HOẠT ĐỘNG', content: '', type: 'red', typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/updateStatus.do",
                                data: {
                                    'idPhong': idPhong,
                                    'trangThai': 2
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        });

        $('#btnEndRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Chuyển trạng thái phòng này sang KẾT THÚC',
                content: '* Lưu ý kiểm tra lại trang thiết bị đầy đủ',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/updateStatus.do",
                                data: {
                                    'idPhong': idPhong,
                                    'trangThai': 3
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        })

        $('#btnBookedRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Chuyển trạng thái phòng này sang ĐANG ĐẶT', content: '', type: 'red', typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/updateStatus.do",
                                data: {
                                    'idPhong': idPhong,
                                    'trangThai': 1
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        })

        $('#btnEndRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Chuyển trạng thái phòng này sang KẾT THÚC',
                content: '* Lưu ý kiểm tra lại trang thiết bị đầy đủ',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/updateStatus.do",
                                data: {
                                    'idPhong': idPhong,
                                    'trangThai': 3
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Chuyển trạng thái thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        })

        $('#btnDeleteRoomAdmin').on('click', function () {
            $.confirm({
                title: 'Bạn có chắc chắn muốn xóa phòng', content: '', type: 'red', typeAnimated: true,
                buttons: {
                    cancel: {
                        text: 'Không',
                        btnClass: 'btn-red',
                    },
                    confirm: {
                        text: 'Có',
                        btnClass: 'btn-red',
                        action: function () {
                            $.ajax({
                                url: "/deleteRoom.do",
                                data: {
                                    'idPhong': idPhong,
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.confirm({
                                            title: 'Xóa phòng thành công',
                                            content: '',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Xác nhận',
                                                    btnClass: 'btn-red',
                                                    action: function () {
                                                        tblRoomAdminFunction.ajax.reload();
                                                    }
                                                },
                                            }
                                        });
                                    } else {
                                        $.confirm({
                                            title: 'Xóa phòng thất bại',
                                            content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                            type: 'red',
                                            typeAnimated: true,
                                            buttons: {
                                                cancel: {
                                                    text: 'Thử lại',
                                                    btnClass: 'btn-red',
                                                },
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                }
            });
        })
    };

    return setup();
});