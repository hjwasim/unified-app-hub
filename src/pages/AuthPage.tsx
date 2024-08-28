
function AuthPage() {

    return (
        <div className="container-xxl">
            <div className="row vh-100 d-flex justify-content-center">
                <div className="col-12 align-self-center">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-body p-0 bg-black auth-header-box">
                                        <div className="text-center p-3">
                                            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Enter details to proceed</h4>
                                            <p className="form-message fw-medium mb-0">Hi, Your BH-Id should match against the Pod</p>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <form className="my-4">
                                            <div className="form-group mb-2">
                                                <label className="form-label" htmlFor="userpassword">BH ID</label>
                                                <input type="text" className="form-control" name="bhid"
                                                       id="bhid" placeholder="Enter your BH-ID"/>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="form-label" htmlFor="userpassword">Pod</label>
                                                <select name="pod" className="form-control" id="pod">
                                                    <option>Asteroids</option>
                                                    <option>Hercules</option>
                                                    <option>Magical</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-0 row">
                                                <div className="col-12">
                                                    <div className="d-grid mt-3">
                                                        <button className="btn btn-primary rounded-0"
                                                                type="button">Continue<i
                                                            className="fas fa-sign-in-alt ms-1"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
