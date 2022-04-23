<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $status_code = 200;

    public function userSignUp(Request $request) {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email",
            "password" => "required",
            "phone" => "required"
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name = $request->name;
        $name = explode(" ", $name);
        $nombre = $name[0];
        $apellido = "";

        if(isset($name[1])) {
            $apellido = $name[1];
        }

        $userDataArray = array(
            "nombre" => $nombre,
            "apellido" => $apellido,
            "email" => $request->email,
            "password" =>  md5($request->password),
            "phone" => $request->phone
        );

        $user_status = User::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! correo electrónico ya registrado"]);
        }

        $user = User::create($userDataArray);

        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registro completado con éxito", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Falló el registro"]);
        }
    }


    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request) {

        $validator = Validator::make($request->all(),
            [
                "email" => "required|email",
                "password" => "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // comprobar si el correo electrónico introducido existe en la base de datos
        $email_status = User::where("email", $request->email)->first();


        // si el correo electrónico existe, entonces comprobaremos la contraseña para el mismo correo electrónico

        if(!is_null($email_status)) {
            $password_status = User::where("email", $request->email)->where("password", md5($request->password))->first();

            // si la contraseña es correcta
            if(!is_null($password_status)) {
                $user = $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Ha iniciado la sesión con éxito", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "No se puede iniciar la sesión. Contraseña incorrecta."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "No se puede iniciar sesión. El correo electrónico no existe."]);
        }
    }

    // Detalle del usuario
    public function userDetail($email) {
        $user = array();
        if($email != "") {
            $user = User::where("email", $email)->first();
            return $user;
        }
    }
}
