#
Setup

**LK** has two operations modes: you can use it as a standalone MIDI controller - requires a USB MIDI interface connected to your device - or as an **Ableton** Live remote controller through a wireless or USB connection. It can also be used in both modes simultaneously.

For **LK** to fit in a **Ableton** setup as controller it must be connected to the UBRIDGE, a software utility that allows communication between LK and Ableton Live.

**UBRIDGE** allows LK to be connected wired or wirelessly. A wired connection is faster to setup and allows lower latency. A wifi connection is more versatile but has usually an increased latency.

Start by downloading [UBRIDGE](https://www.imaginando.pt/products/ubridge/downloads). Install it and run it.

Note \(Windows only\): before running UBRIDGE, right-click on the application's icon and select properties. There should be a tab called Compatibility, on the bottom of the tab, check the box where it says "Run this program as an administrator". You should then be prompted with a request from the system firewall to allow UBRIDGE to connect to the network.

![UBRIDGE firewall settings prompt](https://www.imaginando.pt/images/products/lk/help/setup/firewall.png)

After this you should be looking to a window like the one below:

![UBRIDGE Screenshot](http://www.imaginando.pt/images/products/lk/help/setup/ubridge.jpg)

The **UBRIDGE** detects midi devices present on your system, and helps installing a dedicated Ableton Live control surface to allow communication to and from LK. It also detects and lists mobile devices connected to the computer.

## Configuring UBRIDGE to use LK

To configure UBRIDGE to use LK we need to perform the following steps:

* Select LK tab
* Configure the midi output device
* Install LK control surface onto Ableton Live

### Select LK tab

UBRIDGE is used by LK and TKFX apps. To configure UBRIDGE for LK, ensure that you have the LK tab selected. The selected tab will have a green text indication.

### Configure the MIDI output device

UBRIDGE allows MIDI to and from LK but at this moment only midi output is used. Use the combo box at the right of the screen to configure MIDI output device.

If you are on Mac it is easy, you just need to select **UBRIDGE Virtual Output** because OSX allows the creation of virtual MIDI ports.

If you are on Windows, you need to install a virtual midi driver. There are several options out there but we usually recommend [Tobias Erichsen's loopMIDI](http://www.tobias-erichsen.de/software/loopmidi.html). After installing loopMIDI, create a port and name it UBRIDGE Virtual.

![loopMIDI virtual port](https://www.imaginando.pt/images/products/ubridge/help/loopmidi.png)

**Note**: if you have installed loopMIDI after opening **UBRIDGE**, you will need to restart **UBRIDGE** in order to be listed.

Regardless of the midi device you choose and the operating system you are running, ensure that "Remote" is enabled on the Ableton Live preferences for the midi device in question.

![Ableton Live Preferences](https://www.imaginando.pt/images/products/lk/help/setup/ableton-live-preferences-midi.png)

## Installing LK control surface

This section refers to the installation of the LK control surface which enables LK to work in Ableton Live mode, controlling the scene view of Ableton Live, including clip launch and editing, device racks and all those crazy amazing things that we love about Live. If you just wish to have LK as a simple MIDI controller, please skip this step.

To explain it simply, a control surface is a script that enables communication with the Ableton Live software allowing it to be controlled by another piece of hardware/software.

By default LK is not bundled with Ableton Live because we are not an industry standard \(yet\). In order to make it magically appear on the list, you need to perform a simple step: drag Ableton Live into the UBRIDGE window drop area. This procedure is different depending if you are on Mac OSX or Windows:

**Mac OSX**: open a Finder window and click on Applications. Find Ableton Live on your applications list, drag it over UBRIDGE window drop area. Attention: dragging from Dock will not work.

**Windows**: open a Windows Explorer and locate your Ableton Live installation location. It can be "Program Files", "Program Data", or even "My Weird Location For Computer Programs". Find Live.exe or whatever executable that opens Ableton Live on your computer and drag it over UBRIDGE window drop area. Attention: shortcuts will fail.

**Note 1:** as an alternative you can click on the **+** sign on the drop area to open a file dialog. Locate Ableton Live with the file dialog.

**Note 2: you need to restart Live otherwise the control surface list will not be updated.
**
Since there are people with more than one version of Ableton Live installed, you can make additional drops. An entry will be created for each unique provided path.

![UBRIDGE Control Surface Installation on Ableton Live](https://www.imaginando.pt/images/products/lk/help/setup/ubridge-window-drop-area.png)

Each entry will state Ableton Live's version followed by the version of the control surface that has been installed.

Additionaly three clickable icons will allow you to open Ableton Live log, reinstall or update the control surface and uninstall the control surface from Ableton Live.

If the installation was successful LK should be listed with green color. If the installation fails, the text will be red and the control surface version will be **N/A**.

After restarting Ableton Live, there will be a new control surface option like as below.

Note that LK can run as a MIDI controller on any type of DAW or software that enables MIDI input/output, but we are focusing on setting LK with Ableton Live. For more information on configuring LK with any other MIDI compliant software, please read the manual provided by the developer.

![Ableton Live Preferences Control Surfaces](https://www.imaginando.pt/images/products/lk/help/setup/ableton-live-preferences-control-surfaces.png)

## Connecting devices

UBRIDGE detects mobile devices connected to the computer. Start by connecting your iOS and/or Android device to the computer. You should see the device’s name \(in case of iOS devices\) or the device’s model name \(in case of Android devices\) listed:

![UBRIDGE Control Surface Installation devices](https://www.imaginando.pt/images/products/lk/help/setup/ubridge-devices.png)

For devices to be detected you must ensure the following:

* iOS - ensure that you have iTunes installed and updated.
* Android - ensure that USB debugging is enabled and that your computer has the necessary drivers \(windows only\)

## Establishing a connection with LK

You are now ready to establish a connection between LK and UBRIDGE, so start by opening LK on your device. Touch the logo or drag the navigation bar to the right to open the menu and choose connection. You should see an entry for each available connection.

![LK Network Connecting to Ableton Live](https://www.imaginando.pt/images/products/lk/help/setup/lk-connected-to-ubridge.png)

Touch the entry to establish a connection with UBRIDGE. If the connection is successfully established, the text will be green. On Matrix module it will be saying "Waiting for Ableton Live".

After opening Ableton Live with LK control surface selected, the full connection will be established and the round trip latency will appear in the connection entry:

![LK Network Connection to Ableton Live](https://www.imaginando.pt/images/products/lk/help/setup/lk-connected-to-live.png)

If you want to mark a connection as favorite, tap on the star. Next time LK finds that connection it automatically connect to it. When only one connection is available, LK will automatically connect to it.

Now that you are connected it's time to play. If your are still having issues, please take a look at our [troubleshooting](https://www.imaginando.pt/products/lk/help/troubleshooting) section or contact us using the support or contact section of our website.

[Learn about and how to use the Matrix module.](https://www.imaginando.pt/products/lk/help/matrix)

