import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import "../Home.css";

const ViewDetails = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="row">
        <div
          className="col-12 bannerBg"
          style={{ borderRadius: "20px", padding: "75px" }}
        >
          <h1 className="text-white fw-bold">Siz o'z tashxisingizni bilishni xoxlaysizmi?</h1>
          {/* <p className="text-white">
            Click to get a call back. We are here to answer your questions.
          </p> */}
          <button
            className="btn btn-dark shadow-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Buyerni bosing{" "}
            <i className="ms-2 fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {user?.displayName ? (
                <h5 class="modal-title" id="exampleModalLabel">
                  {user?.displayName}
                </h5>
              ) : (
                <h5 class="modal-title" id="exampleModalLabel">
                  Your Query
                </h5>
              )}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                {user.displayName ? (
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.displayName}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                )}
              </div>

              <div class="input-group mb-3">
                {user.email ? (
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.email}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    class="form-control"
                    placeholder="simple123"
                  />
                )}
                <span class="input-group-text" id="basic-addon2">
                  @gmail.com
                </span>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-12 my-6 ">
                  <div class="row row-cols-1 row-cols-md-1 g-4">
                    
                    <div class="col">
                      <form class="row g-3">
                        
                        
                        <div className="text-start mb-0 ">
                          <label for="inputPhoneNumber">telefon raqamingiz</label>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text px-5" id="basic-addon2">
                            +998
                          </span>
                          <input
                            type="text"
                            class="py-2 form-control"
                            placeholder="123456789"
                            aria-label="Recipient's username"
                          />
                        </div>
                        <div class="col-md-6 text-start">
                          <label for="inpuDistricts" class="form-label">
                            Viloyat
                          </label>
                          <select id="inputState" class="form-select">
                            <option selected>tanlang...</option>
                            <option>Andijon viloyati</option>
                            <option>Buxoro viloyati</option>
                            <option>Farg'ona viloyati</option>
                            <option>Jizzax viloyati</option>
                            <option>Xorazm viloyati</option>
                            <option>Namangan viloyati</option>
                            <option>Navoiy viloyati</option>
                            <option>Qoraqalpog'iston viloyati</option>
                            <option>Samarqand viloyati</option>
                            <option>Qashqadaryo viloyati</option>
                            <option>Sirdaryo viloyati</option>
                            <option>Surxondaryo viloyati</option>
                            <option>Toshkent viloyati</option>
                          </select>
                        </div>
                        <div class="col-md-6 text-start">
                          <label for="inputCity" class="form-label">
                            Shaxar
                          </label>
                          <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-12 text-start">
                          <label for="birthday" class="form-label">
                          Tug'ilgan sana
                          </label>
                          <input type="date" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Bosh og'rig'i</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Isitma</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Holsizlik</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Oshqazon og'rig'i</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Ko'ngil aynishi</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Ich ketishi</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Bosh aylanishi</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Bel og'rig'i</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Tomoq og'rigi</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Terida toshmalar</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1">Kichik tomirlarda yorilish</label>
                        </div>
                        <div class="col-md-6">
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Yo'tal</label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer ">
              <button type="button" class=" btn btn-primary" data-bs-dismiss="modal">
                yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
