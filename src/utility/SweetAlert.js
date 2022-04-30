import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const confirm = (opts, callback, callbackRedirect) => {
    return MySwal.fire({
        title: opts.title,
        text: opts.text,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-outline-danger ml-1",
        },
        confirmButtonColor: "#22577E",
        // buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            callback()
                .then((res) => {
                    if (res?.status === 201) {
                        MySwal.fire({
                            icon: "success",
                            title: "Success!",
                            text: res.statusText,
                            confirmButtonText: "OK",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            },
                            confirmButtonColor: "#22577E",
                        }).then(function (result) {
                            if (result.value) {
                                callbackRedirect();
                            }
                        });
                    }
                    else if (res?.status === 200) {
                        MySwal.fire({
                            icon: "success",
                            title: "Success!",
                            text: res.statusText,
                            confirmButtonText: "Yes",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            },
                            confirmButtonColor: "#22577E",
                        }).then(function (result) {
                            if (result.value) {
                                callbackRedirect();
                            }
                        });
                    }
                    else {
                        MySwal.fire({
                            icon: "error",
                            title: "Error!",
                            text: res.statusText,
                            confirmButtonText: "OK",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            },
                            confirmButtonColor: "#22577E",
                        })
                            .then(function (result) {

                                if (result.value) {
                                    callbackRedirect();
                                }
                            });
                    }


                })
                .catch((err) => {

                    MySwal.fire({
                        icon: "error",
                        title: "error!",
                        text: "An error occurred during the operation.",
                        confirmButtonText: "Yes",
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                        confirmButtonColor: "#22577E",
                    })
                        .then(function (result) {

                            if (result.value) {
                                callbackRedirect();
                            }
                        });
                });
        }
    });
};
