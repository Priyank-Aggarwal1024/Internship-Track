import React from 'react';
import '../../styles/best.css'
import Best1 from '../../assets/best1.png'
import Best2 from '../../assets/best2.png'
import CheckPink from '../../assets/checkbuttonpink.png'
import CheckGray from '../../assets/checkbuttongray.png'
function Best(props) {
    return (
        <section className="int-track-section int-track-section-best">
            <h2 className="int-track-best-heading int-track-fw-500 int-track-f-48 int-track-text-black int-track-text-center">
                Why are we <span className="int-track-text-pink int-track-fw-700">the Best?</span>
            </h2>
            <table className="int-track-best-table">
                <thead>
                    <tr className="int-track-best-table-header int-track-table-row-1">
                        <td className="int-track-table-data int-track-table-data-1-1">Features</td>
                        <td className="int-track-table-data int-track-table-data-1-2">Recorded Class</td>
                        <td className="int-track-table-data int-track-table-data-1-3">Live Class</td>
                        <td className="int-track-table-data int-track-table-data-1-4">Tute<span className="int-track-tute-dude-space">{" "}</span>dude</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="int-track-table-row int-track-table-row-2">
                        <td className="int-track-table-data int-track-table-data-2-1">
                            Afford<span className="int-track-tute-dude-space-2">{" "}</span>ability
                        </td>
                        <td className="int-track-table-data int-track-table-data-2-2">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-2-3">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-2-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                    <tr className="int-track-table-row int-track-table-row-3">
                        <td className="int-track-table-data int-track-table-data-3-1">
                            Learning Flexibility
                        </td>
                        <td className="int-track-table-data int-track-table-data-3-2">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-3-3">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-3-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                    <tr className="int-track-table-row int-track-table-row-4">
                        <td className="int-track-table-data int-track-table-data-4-1">
                            Instant Doubt Solving
                        </td>
                        <td className="int-track-table-data int-track-table-data-4-2">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-4-3">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-4-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                    <tr className="int-track-table-row int-track-table-row-5">
                        <td className="int-track-table-data int-track-table-data-5-1">
                            Personal Mentorship
                        </td>
                        <td className="int-track-table-data int-track-table-data-5-2">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-5-3">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-5-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                    <tr className="int-track-table-row int-track-table-row-6">
                        <td className="int-track-table-data int-track-table-data-6-1">
                            Dedicated Projects
                        </td>
                        <td className="int-track-table-data int-track-table-data-6-2">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-6-3">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-6-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                    <tr className="int-track-table-row int-track-table-row-7">
                        <td className="int-track-table-data int-track-table-data-7-1">
                            Guaranteed Paid Internship Tracks
                        </td>
                        <td className="int-track-table-data int-track-table-data-7-2">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-7-3">
                            <img className="int-track-check-gray" src={CheckGray} alt="UnChecked" />
                        </td>
                        <td className="int-track-table-data int-track-table-data-7-4">
                            <img className="int-track-check-pink" src={CheckPink} alt="Checked" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

    );
}

export default Best;