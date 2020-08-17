# LK Help - Troubleshooting

We will continuously populate this section with relevant information, as it heavily depends on user input and on the nature of the problem.

**LK says there are no connections available**

This is one of the most common problems. The solution varies from case to case and it will greatly depend on your system and configuration:

**1)** Are both devices connected to the same network? Your computer and mobile device must be connected to the same WIFI network.

**2)** Is Bonjour service running (Windows only)? UBRIDGE uses Bonjour to announce a service on the network. In order for this to happen, Bonjour service must be running. To confirm if Bonjour is running, open Services on Windows, look for “Bonjour” service and ensure that it is enabled and running.

**3)** Is your firewall enabled? Usually, when a program starts, the operating systems asks you permission for it to access the network. Open your firewall preferences and check if you have blocked UBRIDGE or Ableton Live from accessing network.

**4)** Do you use anti-virus software? Sometimes, anti-virus software can block network traffic. Try to temporaly disable your anti virus software or check it's settings.

**When I connect my Android device via USB cable, my device doesn't get listed on UBRIDGE. What should I do?**

In order to connect to your mobile device via USB it’s mandatory that you enable USB debugging. This is an advanced Android feature that is usually hidden but pretty simple to access:

**1)** Open "Settings" on your device

**2)** Scroll down to the bottom and choose About phone or About tablet option

**3)** Scroll down to the bottom and locate the build number field

**4)** Tap the Build number field seven times to enable Developer Options. Tapping a few times will unlock a countdown that reads "You are now 3 steps away from being a developer."

**5)** When you are done, you'll see the message "You are now a developer!".

**6)** Tap the Back button and you'll see the Developer options menu under System on your Settings screen.

**7)** Now choose the "Developer options" item and find the "USB debugging" option. Tapping will enable it and Android will prompt you with a confirmation: press accept.

**8)** With UBRIDGE open, replug your device. You should see it's model name listed under "Connected Devices" section

**You are not receiving MIDI IN on LK (Windows)**

Probably you need to restart the UBRIDGE with administrator rights.

** LK is telling me I need to purchase the software but i have already purchased (mobile only).**

**1)** Try to restore purchase - Ensure that you have your device configured with the same account you have made the purchase with. Open LK, open menu, choose Store, tap Restore Purchases.

**2)** Restore purchases doesn't do nothing (Android only) - Sometimes, in some devices, Restore Purchases is not working. If this happens, choose to purchase the same item. Ensure that you have your device configured with the same Google Play account you have made the purchase with.

**3)** I have purchased modules on Android and I can't seem to restore them on iOS (vice-versa) - Purchases are made on a OS basis, this means they are only valid for the OS they were purchased for.

**api-ms-win-crt-runtime-11-1-0.dll is missing when opening UBRIDGE**

The problem is that the KB2999226 (Universal CRT) which is part of the Visual C++ Redistributable for Visual Studio 2015 failed to install.

**1)** Install Windows Updates - Go to Start - Control Panel - Windows Update. Check for updates. Install all available updates. After the updates are installed, restart your computer. After the restart repeat the steps above again until no more updates are available.

**2)** Download the Visual C++ Redistributable - For Windows 64-bit: Visual C++ Redistributable for Visual Studio 2017 (64-bit). For Windows 32-bit: Visual C++ Redistributable for Visual Studio 2017 (32-bit). Run the vcredist_x64.exe (64-bit) or vcredist_x86.exe (32-bit) and select Uninstall.

**3)** Run the .exe again and select Install

If the problem you are having is not listed here contact us for personalised help.

[Go back to introduction](contents)
