import React from 'react'
import './style.css'
class Tentangsaya extends React.Component{
    render(){
        return(
            <body>
                <div class="col=md-9 p-5 pt2">
                    <h3>Tentang Saya</h3>
                    <table class="table table-bordered">
                        <tr>
                            <td><strong>Nama:</strong></td>
                            <td>Nesya Ari Wijayanti</td>
                        </tr>
                        <tr>
                        <td><strong>Tempat Tanggal Lahir:</strong></td>
                            <td>Malang,17-02-2004</td>
                        </tr>
                        <tr>
                        <td><strong>Alamat:</strong></td>
                            <td>Jln.batu putih no.1 pagak</td>
                        </tr>
                        <tr>
                        <td><strong>Jenis Kelamin:</strong></td>
                            <td>Perempuan</td>
                        </tr>
                    </table>
                </div>
        </body>
        )
    }
}
export default Tentangsaya;