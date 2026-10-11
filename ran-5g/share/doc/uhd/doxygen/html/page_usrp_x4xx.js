var page_usrp_x4xx =
[
    [ "Comparative Features List", "page_usrp_x4xx.html#x4xx_feature_list", null ],
    [ "Overview and Features", "page_usrp_x4xx.html#x4xx_overview", [
      [ "The RFSoC CPU/FPGA and Host Operating System", "page_usrp_x4xx.html#x4xx_overview_rfsoc", null ],
      [ "USRP X410 Daughterboard Connectivity", "page_usrp_x4xx.html#x4xx_overview_x410_dboards", null ],
      [ "USRP X440 Daughterboard Connectivity", "page_usrp_x4xx.html#x4xx_overview_x440_dboards", null ],
      [ "Front and Back Panels", "page_usrp_x4xx.html#x4xx_overview_panels", null ],
      [ "The STM32 Microcontroller", "page_usrp_x4xx.html#x4xx_overview_micro", null ],
      [ "Rack Mounting and Cooling", "page_usrp_x4xx.html#x4xx_overview_rackmount", null ],
      [ "eMMC Storage", "page_usrp_x4xx.html#x4xx_overview_storage", null ]
    ] ],
    [ "Getting Started", "page_usrp_x4xx.html#x4xx_getting_started", [
      [ "Assembling the X4x0", "page_usrp_x4xx.html#x4xx_getting_started_assembling", null ],
      [ "Network Connectivity", "page_usrp_x4xx.html#x4xx_getting_started_network_connectivity", [
        [ "Network Interfaces", "page_usrp_x4xx.html#x4xx_getting_started_network_connectivity_ifcs", null ],
        [ "Network Status LEDs", "page_usrp_x4xx.html#x4xx_getting_started_network_connectivity_leds", [
          [ "RJ45 LED Behavior", "page_usrp_x4xx.html#x4xx_getting_started_network_connectivity_leds_rj45", null ],
          [ "QSFP28 LED Behavior", "page_usrp_x4xx.html#x4xx_getting_started_network_connectivity_leds_qsfp28", null ]
        ] ],
        [ "Network Troubleshooting Tips", "page_usrp_x4xx.html#x4xx_network_troubleshooting_tips", null ]
      ] ],
      [ "Security-related Settings", "page_usrp_x4xx.html#x4xx_getting_started_security", null ],
      [ "Serial Connection", "page_usrp_x4xx.html#x4xx_getting_started_serial", [
        [ "Connecting to the Microcontroller", "page_usrp_x4xx.html#x4xx_getting_started_serial_micro", null ]
      ] ],
      [ "SSH Connection", "page_usrp_x4xx.html#x4xx_getting_started_ssh", null ],
      [ "Updating the FPGA", "page_usrp_x4xx.html#x4xx_updating_fpga", [
        [ "FPGA Image Flavors", "page_usrp_x4xx.html#x4xx_updating_fpga_types", null ],
        [ "DDR4 Memory for Programmable Logic", "page_usrp_x4xx.html#x4xx_pl_dram", null ]
      ] ]
    ] ],
    [ "Updating Filesystems", "page_usrp_x4xx.html#x4xx_updating_filesystems", [
      [ "Updating the Filesystem Using Mender", "page_usrp_x4xx.html#x4xx_updating_filesystems_mender", [
        [ "Downloading a Mender Artifact", "page_usrp_x4xx.html#x4xx_updating_filesystems_mender_artifact", null ],
        [ "Installing the Mender Artifact", "page_usrp_x4xx.html#x4xx_updating_filesystems_mender_install", null ]
      ] ],
      [ "Resetting Boot Environment", "page_usrp_x4xx.html#x4xx_resetting_boot_environment", null ],
      [ "Updating the Motherboard CPLD", "page_usrp_x4xx.html#x4xx_updating_cpld", [
        [ "Building the Motherboard CPLD", "page_usrp_x4xx.html#x4xx_building_cpld", null ]
      ] ],
      [ "Updating the SCU", "page_usrp_x4xx.html#x4xx_updating_scu", null ],
      [ "USB Access to eMMC", "page_usrp_x4xx.html#x4xx_accessing_emmc_usb", [
        [ "Flashing eMMC", "page_usrp_x4xx.html#x4xx_flash_emmc", null ]
      ] ],
      [ "Booting X4x0 over JTAG", "page_usrp_x4xx.html#x4xx_jtag_boot", null ]
    ] ],
    [ "Using a USRP X4x0 from UHD", "page_usrp_x4xx.html#x4xx_usage", [
      [ "Device Arguments", "page_usrp_x4xx.html#x4xx_usage_args", null ],
      [ "Master Clock Rates", "page_usrp_x4xx.html#x4xx_usage_mcrs", [
        [ "USRP X410", "page_usrp_x4xx.html#x410_usage_mcrs", null ],
        [ "USRP X440", "page_usrp_x4xx.html#x440_usage_mcrs", [
          [ "General", "page_usrp_x4xx.html#x440_usage_mcr_general", null ],
          [ "Dual Rate", "page_usrp_x4xx.html#x440_usage_mcr_dualrate", null ]
        ] ]
      ] ],
      [ "Timed Commands", "page_usrp_x4xx.html#x4xx_usage_timedcmds", null ],
      [ "GPS", "page_usrp_x4xx.html#x4xx_usage_gps", null ],
      [ "Front-Panel Programmable GPIOs", "page_usrp_x4xx.html#x4xx_usage_gpio", null ],
      [ "Subdev Specifications", "page_usrp_x4xx.html#x4xx_usage_subdevspec", null ],
      [ "The Sensor API", "page_usrp_x4xx.html#x4xx_usage_sensors", null ],
      [ "Rear Panel Status LEDs", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds", [
        [ "Power LED", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_power", [
          [ "Power LED Behavior", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_power_behavior", null ]
        ] ],
        [ "User-configurable LEDs", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable", [
          [ "Supported LED Behaviors", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable_suppbeh", null ],
          [ "LEDs Default Behavior", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable_defaults", null ],
          [ "Temporarily change the LED Behavior", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable_tempbeh", null ],
          [ "Persistently change the LED Behavior", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable_persistentbeh", null ],
          [ "Using FPGA LED Control", "page_usrp_x4xx.html#x4xx_usage_rearpanelleds_configurable_fpga", null ]
        ] ]
      ] ]
    ] ],
    [ "Theory of Operation", "page_usrp_x4xx.html#x4xx_too", [
      [ "Converter Rates", "page_usrp_x4xx.html#x4xx_too_convrate", [
        [ "USRP X410", "page_usrp_x4xx.html#x410_too_convrate", null ],
        [ "USRP X440", "page_usrp_x4xx.html#x440_too_convrate", null ]
      ] ],
      [ "Clocking", "page_usrp_x4xx.html#x4xx_too_clocking", null ]
    ] ],
    [ "ADC self calibration", "page_usrp_x4xx.html#x4xx_adc_self_cal", null ],
    [ "ZBX Daughterboard", "page_zbx.html", [
      [ "Overview", "page_zbx.html#zbx_overview", null ],
      [ "Theory of Operation", "page_zbx.html#zbx_too", [
        [ "Digital Control", "page_zbx.html#zbx_too_cpld", null ],
        [ "LO Control", "page_zbx.html#zbx_too_lo_control", null ]
      ] ],
      [ "Antenna Ports", "page_zbx.html#zbx_ant_ports", [
        [ "Status LEDs", "page_zbx.html#zbx_leds", null ]
      ] ],
      [ "Power Calibration", "page_zbx.html#zbx_pwr_cal", null ],
      [ "Sensors", "page_zbx.html#zbx_sensors", null ],
      [ "Gain Control", "page_zbx.html#zbx_gain_control", [
        [ "Default Gain Profile", "page_zbx.html#zbx_gain_default", null ],
        [ "Manual Gain Profile", "page_zbx.html#zbx_gain_manual", null ],
        [ "CPLD-Table Gain Profile with ATR control", "page_zbx.html#zbx_gain_table", null ],
        [ "CPLD-Table Gain Profile without ATR control", "page_zbx.html#zbx_gain_tablenoatr", null ]
      ] ],
      [ "Auto-Transmit-Receive Registers (ATR)", "page_zbx.html#zbx_atr", null ],
      [ "Updating the ZBX CPLD", "page_zbx.html#zbx_updating_cpld", [
        [ "CPLD Programming: Details", "page_zbx.html#zbx_updating_cpld_details", null ]
      ] ],
      [ "Flash Memory and EEPROM", "page_zbx.html#zbx_flash", null ]
    ] ],
    [ "FBX Daughterboard", "page_fbx.html", [
      [ "Overview", "page_fbx.html#fbx_overview", null ],
      [ "Theory of Operation", "page_fbx.html#fbx_too", null ],
      [ "Digital Control", "page_fbx.html#fbx_too_dctrl", null ],
      [ "Antenna Ports", "page_fbx.html#fbx_antenna", [
        [ "Status LEDs", "page_fbx.html#fbx_leds", null ]
      ] ],
      [ "Sensors", "page_fbx.html#fbx_sensors", null ],
      [ "Auto-Transmit-Receive Registers (ATR)", "page_fbx.html#fbx_atr", null ]
    ] ],
    [ "X4x0 GPIO API", "page_x400_gpio_api.html", [
      [ "The X4x0 Front Panel GPIO", "page_x400_gpio_api.html#x4x0gpio_fpanel", [
        [ "X4x0 Front Panel GPIO", "page_x400_gpio_api.html#x4x0gpio_fpanel_gpio", [
          [ "Connector", "page_x400_gpio_api.html#x4x0gpio_fpanel_conn", null ],
          [ "Pin Mapping", "page_x400_gpio_api.html#x4x0gpio_fpanel_pins", null ]
        ] ],
        [ "Setting GPIO Output", "page_x400_gpio_api.html#x4x0_gpio_output", null ],
        [ "Configuring External Power Supply", "page_x400_gpio_api.html#x4x0_gpio_power", null ],
        [ "Configuring GPIO Voltage", "page_x400_gpio_api.html#x4x0_gpio_voltage", null ]
      ] ],
      [ "The x4x0 SPI Mode", "page_x400_gpio_api.html#x4x0_spi_iface", [
        [ "Configuration of SPI lines", "page_x400_gpio_api.html#x4x0_spi_cfg", null ],
        [ "Write and read on SPI", "page_x400_gpio_api.html#x4x0_spi_r_w", null ]
      ] ]
    ] ]
];